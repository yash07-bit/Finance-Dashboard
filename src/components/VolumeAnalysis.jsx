import { formatCurrency, getWeeklyVolumeAnalysis } from '../utils/financeData';

export default function VolumeAnalysis() {
  const { days, avgDaily, peakVolume } = getWeeklyVolumeAnalysis();

  const handleDownloadExcel = () => {
    const rows = [
      ['Day', 'Amount', 'Peak'],
      ...days.map((day) => [day.day, day.amount, day.isHighlight ? 'Yes' : 'No']),
      ['', '', ''],
      ['Average Daily', avgDaily],
      ['Peak Volume', peakVolume],
    ];

    const csvContent = rows.map((row) => row.join('\t')).join('\n');

    const blob = new Blob([csvContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `volume-analysis-${new Date().toISOString().slice(0, 10)}.xlsx`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="col-span-12 lg:col-span-7 bg-white p-8 rounded-xl flex flex-col justify-between min-h-[400px] border border-slate-200">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-bold font-headline mb-1 text-primary">Volume Analysis</h3>
            <p className="text-sm text-text-muted">Transactional flow over the last 7 days</p>
          </div>
          <button type="button" className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">
            more_vert
          </button>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-80 mb-3 mt-8 px-2 bg-slate-50 rounded-lg py-4">
          {days.map((item) => (
            <div key={item.day + item.date.toISOString()} className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
              <div
                title={`${item.day}: ${formatCurrency(item.amount)}`}
                className={`w-full rounded-t transition-colors ${
                  item.isHighlight
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
                style={{ height: item.height, minHeight: '16px' }}
              ></div>
              <span className={`text-[10px] font-bold ${item.isHighlight ? 'text-primary' : 'text-slate-500'}`}>
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
        <div className="flex gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Avg. Daily</p>
            <p className="text-xl font-bold font-headline text-primary">{formatCurrency(avgDaily)}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Peak Vol</p>
            <p className="text-xl font-bold font-headline text-primary">{formatCurrency(peakVolume)}</p>
          </div>
        </div>
        <button type="button" onClick={handleDownloadExcel} className="text-primary text-sm font-bold flex items-center gap-1 group hover:text-primary-accent transition-colors">
          Download Excel{' '}
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
