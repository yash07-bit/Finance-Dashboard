import { formatCurrency } from '../utils/mockData';

export default function BudgetSummaryCard({ totalBudget, totalSpent, remaining }) {
  return (
    <div className="md:col-span-2 bg-primary rounded-2xl p-6 md:p-7 text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/15 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-400/20 transition-colors duration-700"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-blue-200/90 font-semibold tracking-wide uppercase text-xs mb-1">Total Monthly Budget</p>
            <h3 className="text-3xl md:text-4xl font-headline font-bold leading-tight">{formatCurrency(totalBudget)}</h3>
          </div>
          <span className="material-symbols-outlined text-3xl text-blue-300/50" data-icon="payments">
            payments
          </span>
        </div>
        <div className="grid grid-cols-2 gap-6 text-left">
          <div className="space-y-1">
            <p className="text-blue-200/75 text-xs uppercase tracking-wide">Total Spent</p>
            <p className="text-xl md:text-2xl font-bold font-headline">{formatCurrency(totalSpent)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-blue-200/75 text-xs uppercase tracking-wide">Remaining to Spend</p>
            <p className="text-xl md:text-2xl font-bold font-headline text-secondary-fixed-dim">{formatCurrency(remaining)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
