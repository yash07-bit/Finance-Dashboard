import { getMarketSignals } from '../utils/financeData';

export default function MarketSentiment() {
  const indicators = getMarketSignals();

  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl overflow-hidden relative min-h-[300px]">
      <div className="relative z-10">
        <h3 className="font-bold font-headline mb-2">Data Signals Context</h3>
        <p className="text-sm text-on-surface-variant max-w-sm mb-12">
          How your spending, balances, and budgets are trending inside the sample data set.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator) => (
            <div key={indicator.label}>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{indicator.label}</p>
              <p className="text-2xl font-bold">{indicator.value}</p>
              <span className={`text-[10px] ${indicator.changeColor} font-medium`}>{indicator.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 p-8 opacity-10">
        <span className="material-symbols-outlined text-[120px]" data-icon="query_stats">
          query_stats
        </span>
      </div>
    </div>
  );
}
