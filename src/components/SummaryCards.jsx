import { formatCurrency } from '../utils/mockData';

export default function SummaryCards({ metrics }) {
  const changeLabel = `${metrics.balanceChangePct >= 0 ? '+' : ''}${metrics.balanceChangePct.toFixed(1)}%`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Total Balance */}
      <div className="bg-gradient-finance p-6 rounded-xl shadow-md text-white group hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-primary-accent/30 rounded-lg text-primary-accent">
            <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
          </div>
          <span className="text-xs font-bold text-success bg-success/20 px-2 py-1 rounded-md">{changeLabel}</span>
        </div>
        <p className="text-slate-200 text-xs uppercase tracking-wide font-semibold">Total Balance</p>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">{formatCurrency(metrics.totalBalance)}</h3>
      </div>

      {/* Monthly Income */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-border-light hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-success/10 rounded-lg text-success">
            <span className="material-symbols-outlined text-2xl">trending_up</span>
          </div>
          <span className="text-xs font-bold text-success bg-success/20 px-2 py-1 rounded-md">Income</span>
        </div>
        <p className="text-text-muted text-xs uppercase tracking-wide font-semibold">Monthly Income</p>
        <h3 className="text-2xl md:text-3xl font-bold text-success mt-2">{formatCurrency(metrics.monthlyIncome)}</h3>
      </div>

      {/* Monthly Expenses */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-border-light hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-error/10 rounded-lg text-error">
            <span className="material-symbols-outlined text-2xl">payments</span>
          </div>
          <span className="text-xs font-bold text-error bg-error/20 px-2 py-1 rounded-md">Expense</span>
        </div>
        <p className="text-text-muted text-xs uppercase tracking-wide font-semibold">Monthly Expenses</p>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2">{formatCurrency(metrics.monthlyExpenses)}</h3>
      </div>
    </div>
  );
}
