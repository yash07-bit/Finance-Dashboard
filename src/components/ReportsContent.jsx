import ReportHeader from './ReportHeader';
import PortfolioVelocity from './PortfolioVelocity';
import MonthlyNetMovement from './MonthlyNetMovement';
import CategoryDistribution from './CategoryDistribution';
import GeneratedReports from './GeneratedReports';
import ReportFooter from './ReportFooter';
import { getReportMetrics, mockTransactions, monthlyBalanceSeries } from '../utils/mockData';

export default function ReportsContent() {
  const reportMetrics = getReportMetrics(mockTransactions, monthlyBalanceSeries);

  return (
    <div className="p-10 space-y-10">
      {/* Header & Controls */}
      <ReportHeader />

      {/* Bento Grid Stats Section */}
      <div className="grid grid-cols-12 gap-6">
        <PortfolioVelocity portfolioValue={reportMetrics.portfolioValue} velocityPct={reportMetrics.velocityPct} />
        <MonthlyNetMovement movement={reportMetrics.monthlyMovement} />
        <CategoryDistribution categories={reportMetrics.categoryDistribution} />
      </div>

      {/* Generated Reports */}
      <GeneratedReports />

      {/* Footer */}
      <ReportFooter />
    </div>
  );
}
