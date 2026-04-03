import { useMemo, useState } from 'react';
import ReportHeader from './ReportHeader';
import PortfolioVelocity from './PortfolioVelocity';
import MonthlyNetMovement from './MonthlyNetMovement';
import CategoryDistribution from './CategoryDistribution';
import GeneratedReports from './GeneratedReports';
import ReportFooter from './ReportFooter';
import { getReportMetrics, getBalanceSeries, formatCurrency } from '../utils/financeData';
import { useAppData } from '../context/useAppData';

export default function ReportsContent() {
  const { data } = useAppData();
  const [range, setRange] = useState('12m');
  const allTransactions = data.transactions;
  // Pass transactions to calculate dynamic balance series
  const allBalances = getBalanceSeries(allTransactions);

  const filteredBalances = useMemo(
    () => (range === '6m' ? allBalances.slice(-6) : allBalances.slice(-12)),
    [allBalances, range],
  );

  const filteredTransactions = useMemo(() => {
    if (!allTransactions.length) return allTransactions;

    const latestDate = allTransactions.reduce((latest, tx) => {
      const date = new Date(tx.date);
      return date > latest ? date : latest;
    }, new Date(allTransactions[0].date));

    const cutoff = new Date(latestDate);
    cutoff.setMonth(cutoff.getMonth() - (range === '6m' ? 6 : 12));

    return allTransactions.filter((tx) => new Date(tx.date) >= cutoff);
  }, [allTransactions, range]);

  const reportMetrics = useMemo(
    () => getReportMetrics(filteredTransactions, filteredBalances),
    [filteredTransactions, filteredBalances],
  );

  const handleToggleRange = () => {
    setRange((current) => (current === '12m' ? '6m' : '12m'));
  };

  const handleDownloadCsv = () => {
    const movementRows = reportMetrics.monthlyMovement
      .map((row) => `${row.month},${row.revenue},${row.burn}`)
      .join('\n');
    const categoryRows = reportMetrics.categoryDistribution
      .map((row) => `${row.name},${row.percentage}%`)
      .join('\n');

    const csv = [
      `Report Range,${range === '6m' ? 'Last 6 Months' : 'Last 12 Months'}`,
      `Portfolio Value,${formatCurrency(reportMetrics.portfolioValue)}`,
      `Velocity,${reportMetrics.velocityPct.toFixed(2)}%`,
      '',
      'Monthly Net Movement',
      'Month,Revenue,Burn',
      movementRows,
      '',
      'Category Distribution',
      'Category,Share',
      categoryRows,
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `strategic-reports-${range}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-10 space-y-10">
      {/* Header & Controls */}
      <ReportHeader
        range={range}
        onToggleRange={handleToggleRange}
        onDownloadCsv={handleDownloadCsv}
      />

      {/* Bento Grid Stats Section */}
      <div className="grid grid-cols-12 gap-6">
        <PortfolioVelocity portfolioValue={reportMetrics.portfolioValue} velocityPct={reportMetrics.velocityPct} monthlyMovement={reportMetrics.monthlyMovement} />
        <MonthlyNetMovement movement={reportMetrics.monthlyMovement} />
        <CategoryDistribution categories={reportMetrics.categoryDistribution} />
      </div>

      {/* Generated Reports */}
      <GeneratedReports reportRange={range} reportMetrics={reportMetrics} />

      {/* Footer */}
      <ReportFooter />
    </div>
  );
}
