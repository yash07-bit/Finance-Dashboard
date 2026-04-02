export default function ReportHeader({ range = '12m', onToggleRange, onDownloadCsv }) {
  const rangeLabel = range === '6m' ? 'Last 6 Months' : 'Last 12 Months';

  return (
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-4xl font-extrabold font-headline tracking-tight text-primary">Strategic Reports</h2>
        <p className="text-on-surface-variant mt-2 max-w-lg font-body">Deep-dive analytics and fiscal summaries for the current venture portfolio.</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleRange}
          className="flex items-center bg-surface-container-low px-4 py-2.5 rounded-xl border-b-2 border-primary hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-primary mr-2" data-icon="calendar_today">
            calendar_today
          </span>
          <span className="text-sm font-semibold text-primary">{rangeLabel}</span>
        </button>
        <button
          type="button"
          onClick={onDownloadCsv}
          className="bg-surface-container-lowest text-primary font-semibold py-2.5 px-5 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-all active:scale-95 flex items-center gap-2 shadow-sm"
        >
          <span className="material-symbols-outlined text-xl" data-icon="file_download">
            file_download
          </span>
          Download CSV Spreadsheet
        </button>
      </div>
    </div>
  );
}
