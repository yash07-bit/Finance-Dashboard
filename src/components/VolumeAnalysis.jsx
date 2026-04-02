export default function VolumeAnalysis() {
  const days = [
    { day: 'MON', height: '40%' },
    { day: 'TUE', height: '65%' },
    { day: 'WED', height: '55%' },
    { day: 'THU', height: '90%', isHighlight: true },
    { day: 'FRI', height: '45%' },
    { day: 'SAT', height: '30%' },
    { day: 'SUN', height: '35%' },
  ];

  return (
    <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px]">
      <div>
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-lg font-bold font-headline mb-1">Volume Analysis</h3>
            <p className="text-sm text-on-surface-variant">Transactional flow over the last 7 days</p>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            more_vert
          </button>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-4 h-48 mb-6 mt-12 px-4">
          {days.map((item) => (
            <div key={item.day} className="flex flex-col items-center gap-3 w-full">
              <div
                className={`w-full rounded-t-lg hover:opacity-80 transition-colors ${
                  item.isHighlight
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-surface-container-low hover:bg-primary-fixed'
                }`}
                style={{ height: item.height }}
              ></div>
              <span className={`text-[10px] font-bold ${item.isHighlight ? 'text-primary' : 'text-on-surface-variant'}`}>
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
        <div className="flex gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Avg. Daily</p>
            <p className="text-xl font-bold font-headline">$14,280</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Peak Vol</p>
            <p className="text-xl font-bold font-headline">$28,941</p>
          </div>
        </div>
        <button className="text-blue-600 text-sm font-bold flex items-center gap-1 group hover:text-blue-700">
          Download PDF{' '}
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
