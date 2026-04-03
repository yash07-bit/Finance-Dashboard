import { useMemo, useState } from 'react';
import ReportItem from './ReportItem';
import { formatCurrency } from '../utils/financeData';

export default function GeneratedReports({ reportRange = '12m', reportMetrics }) {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: 'Annual Fiscal Summary 2023',
      icon: 'description',
      iconBg: 'bg-primary/5 text-primary',
      type: 'Audit',
      badgeColor: 'bg-primary-container text-on-primary-container',
      size: '12.4 MB',
      date: 'Jan 14, 2024',
      status: 'verified',
    },
    {
      id: 2,
      title: 'Q3 Performance Breakdown',
      icon: 'analytics',
      iconBg: 'bg-secondary-container/10 text-secondary',
      type: 'Review',
      badgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
      size: '4.1 MB',
      date: 'Oct 02, 2023',
      status: 'signed',
    },
    {
      id: 3,
      title: 'Monthly Expenditure Analysis',
      icon: 'inventory',
      iconBg: 'bg-on-surface-variant/5 text-on-surface-variant',
      type: 'Operational',
      badgeColor: 'bg-surface-container-highest text-on-surface-variant',
      size: '2.8 MB',
      date: 'Apr 12, 2024',
      status: 'archiving',
    },
  ]);

  const [previewReportId, setPreviewReportId] = useState(null);
  const [actionNote, setActionNote] = useState('');

  const previewReport = useMemo(
    () => reports.find((report) => report.id === previewReportId) ?? null,
    [reports, previewReportId],
  );

  const rangeLabel = reportRange === '6m' ? 'Last 6 Months' : 'Last 12 Months';

  const handlePreview = (report) => {
    setPreviewReportId(report.id);
  };

  const handleDownload = (report) => {
    const movement = reportMetrics?.monthlyMovement ?? [];
    const distribution = reportMetrics?.categoryDistribution ?? [];
    const content = [
      `Report: ${report.title}`,
      `Type: ${report.type}`,
      `Status: ${report.status}`,
      `Range: ${rangeLabel}`,
      `Portfolio Value: ${formatCurrency(reportMetrics?.portfolioValue ?? 0)}`,
      `Velocity: ${(reportMetrics?.velocityPct ?? 0).toFixed(2)}%`,
      '',
      'Monthly Net Movement',
      'Month,Revenue,Burn',
      ...movement.map((row) => `${row.month},${row.revenue},${row.burn}`),
      '',
      'Category Distribution',
      'Category,Percentage',
      ...distribution.map((row) => `${row.name},${row.percentage}%`),
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${report.title.toLowerCase().replace(/\s+/g, '-')}-${reportRange}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setActionNote(`${report.title} downloaded.`);
  };

  const handleCycleStatus = (report) => {
    const order = ['archiving', 'signed', 'verified'];
    const next = order[(order.indexOf(report.status) + 1) % order.length];
    setReports((current) => current.map((item) => (
      item.id === report.id ? { ...item, status: next } : item
    )));
    setActionNote(`${report.title} moved to ${next} state.`);
  };

  return (
    <div className="bg-surface-container-low/50 rounded-[2.5rem] p-10">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary">Generated Financial Ledgers</h3>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
          <span className="material-symbols-outlined text-lg" data-icon="history">
            history
          </span>
          Archival records since inception
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {reports.map((report) => (
          <ReportItem
            key={report.id}
            report={report}
            onPreview={handlePreview}
            onDownload={handleDownload}
            onStatusToggle={handleCycleStatus}
          />
        ))}
      </div>

      {actionNote ? <p className="mt-5 text-sm text-on-surface-variant">{actionNote}</p> : null}

      {previewReport ? (
        <div className="fixed inset-0 z-[80] bg-slate-900/45 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
              <h4 className="text-base sm:text-lg font-bold text-primary">{previewReport.title}</h4>
              <button type="button" onClick={() => setPreviewReportId(null)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3 text-sm text-slate-700">
              <p><span className="font-semibold text-primary">Type:</span> {previewReport.type}</p>
              <p><span className="font-semibold text-primary">Status:</span> {previewReport.status}</p>
              <p><span className="font-semibold text-primary">Range:</span> {rangeLabel}</p>
              <p><span className="font-semibold text-primary">Portfolio Value:</span> {formatCurrency(reportMetrics?.portfolioValue ?? 0)}</p>
              <p><span className="font-semibold text-primary">Velocity:</span> {(reportMetrics?.velocityPct ?? 0).toFixed(2)}%</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
