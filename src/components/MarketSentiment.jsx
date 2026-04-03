import { getMarketSignals } from '../utils/financeData';
import { useAppData } from '../context/useAppData';
import { useMemo } from 'react';

export default function MarketSentiment() {
  const { data } = useAppData();
  const indicators = useMemo(() => getMarketSignals(data.transactions), [data.transactions]);

  return (
    <div className="col-span-12 lg:col-span-8 bg-white p-8 rounded-xl overflow-hidden relative min-h-[300px] border border-slate-200 shadow-sm">
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-500/18 rounded-tl-[3.5rem] -mr-8 -mb-8 transition-transform shadow-inner"></div>
      <div className="relative z-10">
        <h3 className="font-bold font-headline mb-1 text-primary text-lg">Data Signals Context</h3>
        <p className="text-sm text-slate-600 max-w-sm mb-10">
          How your spending, balances, and budgets are trending inside the sample data set.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {indicators.map((indicator) => (
            <div key={indicator.label} className="flex flex-col">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{indicator.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">{indicator.value}</p>
              <span className={`text-[10px] font-medium mt-1 ${indicator.changeColor}`}>{indicator.change}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
