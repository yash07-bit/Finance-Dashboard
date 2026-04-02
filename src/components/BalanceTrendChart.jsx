import { formatCurrency } from '../utils/mockData';

export default function BalanceTrendChart({ series }) {
  const min = Math.min(...series.map((s) => s.balance));
  const max = Math.max(...series.map((s) => s.balance));
  const range = Math.max(max - min, 1);

  const points = series
    .map((item, index) => {
      const x = (index / (series.length - 1 || 1)) * 800;
      const y = 180 - ((item.balance - min) / range) * 150;
      return `${x},${y}`;
    })
    .join(' ');

  const firstBalance = series[0]?.balance ?? 0;
  const latestBalance = series.at(-1)?.balance ?? 0;
  const growth = firstBalance ? (((latestBalance - firstBalance) / firstBalance) * 100).toFixed(1) : '0.0';

  return (
    <div className="lg:col-span-8 bg-surface-container-low rounded-2xl p-8 relative overflow-hidden flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h4 className="text-lg font-bold font-headline text-primary">Balance Trend</h4>
          <p className="text-xs text-on-surface-variant">Current balance {formatCurrency(latestBalance)} • {growth}% over period</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-lowest px-4 py-2 rounded-lg text-xs font-semibold text-primary shadow-sm">6 Months</button>
          <button className="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container-highest">1 Year</button>
        </div>
      </div>

      {/* Decorative Chart Logic (SVG Simulation) */}
      <div className="flex-grow flex items-end justify-between gap-2 relative mt-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="material-symbols-outlined scale-[10]" data-icon="show_chart">show_chart</span>
        </div>

        {/* Simulated Graph Bars with Tonal Nesting */}
        <div className="w-full h-48 bg-gradient-to-t from-primary/5 to-transparent rounded-t-lg absolute bottom-0"></div>

        <svg className="absolute bottom-0 w-full h-full drop-shadow-xl" preserveAspectRatio="none" viewBox="0 0 800 200">
          <polyline
            fill="none"
            stroke="#031635"
            strokeLinecap="round"
            strokeWidth="4"
            points={points}
          />
          <polygon
            fill="rgba(3, 22, 53, 0.05)"
            points={`${points} 800,200 0,200`}
          />
        </svg>

        {/* Month Markers */}
        <div className="absolute -bottom-6 w-full flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-4">
          {series.map((item) => (
            <span key={item.month}>{item.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
