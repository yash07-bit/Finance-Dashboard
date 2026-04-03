export default function ReportHeader({ range = '12m', onToggleRange, onDownloadCsv }) {
  const rangeLabel = range === '6m' ? 'Last 6 Months' : 'Last 12 Months';

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-headline tracking-tight text-primary">Strategic Reports</h2>
        <p className="text-on-surface-variant mt-2 max-w-lg font-body text-sm md:text-base">Deep-dive analytics and fiscal summaries for the current venture portfolio.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
        <button
          type="button"
          onClick={onToggleRange}
          className="flex items-center bg-surface-container-low px-4 py-2.5 rounded-xl border-b-2 border-primary hover:bg-surface-container transition-colors text-sm font-semibold"
        >
          <span className="material-symbols-outlined text-primary mr-2" data-icon="calendar_today">
            calendar_today
          </span>
          <span className="text-xs sm:text-sm">{rangeLabel}</span>
        </button>
        <button
          type="button"
          onClick={onDownloadCsv}
          className="bg-surface-container-lowest text-primary font-semibold py-2.5 px-4 sm:px-5 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-all active:scale-95 flex items-center gap-2 shadow-sm text-sm w-full sm:w-auto justify-center"
        >
          <span className="material-symbols-outlined text-lg sm:text-xl" data-icon="file_download">
            file_download
          </span>
          <span className="hidden sm:inline">Download CSV</span>
          <span className="sm:hidden">CSV</span>
        </button>
      </div>
    </div>
  );
}
