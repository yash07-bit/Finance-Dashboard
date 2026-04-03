import { getBalanceSeries } from '../utils/financeData';
import { useAppData } from '../context/useAppData';
import { useEffect, useState, useMemo } from 'react';

export default function MonthlyComparison() {
  const { data } = useAppData();
  const [comparisonData, setComparisonData] = useState({ change: 0, changeAmount: 0, isPositive: true });
  
  // Calculate balance series from context transactions
  const series = useMemo(() => getBalanceSeries(data.transactions), [data.transactions]);

  useEffect(() => {
    if (data.transactions.length > 0 && series.length > 1) {
      const currentMonth = series.at(-1)?.balance ?? 0;
      const previousMonth = series.at(-2)?.balance ?? currentMonth;
      const change = previousMonth ? ((currentMonth - previousMonth) / previousMonth) * 100 : 0;
      const changeAmount = currentMonth - previousMonth;
      const isPositive = change >= 0;
      setComparisonData({ change, changeAmount, isPositive });
    }
  }, [data.transactions, series]);

  const { change, changeAmount, isPositive } = comparisonData;
  const progressWidth = Math.min(100, Math.abs(change) * 5);

  return (
    <div className="bg-white p-8 rounded-xl flex-1 flex flex-col justify-between border border-slate-200 relative overflow-hidden group">
      <div className="absolute bottom-0 left-0 z-0 w-28 h-28 bg-sky-200/25 rounded-tr-[3.5rem] -ml-8 -mb-8 transition-transform group-hover:scale-110 shadow-inner"></div>
      <div className="relative z-10 flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-4">Monthly Comparison</h3>
          <div className="flex items-center gap-3">
            <p className="text-4xl font-extrabold font-headline text-primary">{isPositive ? '+' : ''}{change.toFixed(1)}%</p>
            <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold ${isPositive ? 'text-emerald-700 bg-emerald-100' : 'text-red-700 bg-red-100'}`}>
              <span className="material-symbols-outlined text-sm" data-icon={isPositive ? 'trending_up' : 'trending_down'}>
                {isPositive ? 'trending_up' : 'trending_down'}
              </span>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-3">
            {isPositive ? 'Net increase' : 'Net decrease'} vs previous month • {isPositive ? '+' : ''}${Math.abs(changeAmount).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>
      <div className="relative z-10 mt-8 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all relative z-20 ${isPositive ? 'bg-emerald-500' : 'bg-red-500'}`}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
}
