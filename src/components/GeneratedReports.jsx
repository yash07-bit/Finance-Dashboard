import ReportItem from './ReportItem';

export default function GeneratedReports() {
  const reports = [
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
  ];

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
          <ReportItem key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}
