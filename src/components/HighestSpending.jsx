import { useAppData } from '../context/useAppData';
import { useMemo } from 'react';

export default function HighestSpending() {
  const { data } = useAppData();

  const spendingData = useMemo(() => {
    if (data.transactions.length === 0) {
      return { category: 'Food & Dining', percentage: 24 };
    }
    
    const spending = {};
    data.transactions.forEach(tx => {
      if (tx.type === 'expense') {
        spending[tx.category] = (spending[tx.category] || 0) + tx.amount;
      }
    });
    
    const sorted = Object.entries(spending).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0) {
      const total = Object.values(spending).reduce((a, b) => a + b, 0);
      const percentage = Math.round((sorted[0][1] / total) * 100);
      return { category: sorted[0][0], percentage };
    }
    
    return { category: 'Food & Dining', percentage: 24 };
  }, [data.transactions]);

  return (
    <div className="bg-primary text-white p-6 sm:p-7 lg:p-8 rounded-xl flex-1 relative overflow-hidden min-h-[300px] min-w-0">
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6">
        <div className="max-w-[26rem]">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 mx-auto">
            <span className="material-symbols-outlined text-white" data-icon="restaurant_menu">
              restaurant_menu
            </span>
          </div>
          <h3 className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] mb-2">Highest Spending</h3>
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-headline leading-tight max-w-full break-words">
            {spendingData.category}
          </p>
        </div>
        <div className="max-w-[26rem] w-full">
          <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
            <span className="text-3xl sm:text-4xl font-black font-headline text-emerald-300 leading-none">+{spendingData.percentage}%</span>
            <span className="text-sm text-white/75">of total spending</span>
          </div>
          <p className="text-white/70 text-xs mt-3.5 leading-relaxed max-w-full break-words">
            {spendingData.category} is your top spending category, accounting for {spendingData.percentage}% of total expenses.
          </p>
        </div>
      </div>

      {/* Abstract Gradient Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl"></div>
    </div>
  );
}
