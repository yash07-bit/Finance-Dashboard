import { useState, useMemo } from 'react';
import { formatCurrency } from '../utils/financeData';

export default function PortfolioVelocity({ portfolioValue, velocityPct, monthlyMovement = [] }) {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(monthlyMovement.length - 1);
  const pct = `${velocityPct >= 0 ? '+' : ''}${velocityPct.toFixed(1)}%`;
  
  const maxValue = useMemo(() => {
    if (!monthlyMovement || monthlyMovement.length === 0) return 1;
    return Math.max(...monthlyMovement.map(m => m.revenue || 0), 1);
  }, [monthlyMovement]);
  
  const selectedMonth = monthlyMovement[selectedMonthIndex] || {};

  return (
    <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Portfolio Velocity</span>
          <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-1 rounded-full">{pct}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tighter text-primary break-words line-clamp-2">
          {selectedMonth.month ? formatCurrency(selectedMonth.revenue ?? 0) : formatCurrency(portfolioValue)}
        </h3>
        <p className="text-sm text-on-surface-variant/70 mt-4">
          {selectedMonth.month ? `Revenue for ${selectedMonth.month}` : 'Net asset appreciation since last fiscal year closing.'}
        </p>
      </div>
      <div className="mt-8 flex items-end gap-1 h-12">
        {monthlyMovement.map((month, index) => {
          const percentOfMax = maxValue > 0 ? month.revenue / maxValue : 0;
          const height = Math.max(4, Math.round(percentOfMax * 48));
          const isSelected = index === selectedMonthIndex;
          return (
            <button
              key={month.month}
              onClick={() => setSelectedMonthIndex(index)}
              className={`w-full rounded-t-sm transition-all cursor-pointer hover:opacity-80 ${
                isSelected
                  ? 'bg-primary shadow-md shadow-primary/40'
                  : 'bg-primary/10'
              }`}
              style={{ height: `${height}px` }}
              title={`${month.month}: ${formatCurrency(month.revenue)}`}
            />
          );
        })}
      </div>
    </div>
  );
}
