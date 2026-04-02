import { useState } from 'react';
import { formatCurrency } from '../utils/financeData';

export default function AddCategoryForm({
  onCreateCategory,
  forecast,
  actionNote,
  onSmartRebalance,
  onExportBudgetCsv,
}) {
  const icons = ['cloud', 'work', 'shopping_bag', 'health_and_safety', 'more_horiz'];
  const [name, setName] = useState('');
  const [limit, setLimit] = useState('');
  const [threshold, setThreshold] = useState('85');
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedName = name.trim();
    const parsedLimit = Number(limit);
    if (!normalizedName || !Number.isFinite(parsedLimit) || parsedLimit <= 0) return;

    if (onCreateCategory) {
      onCreateCategory({
        name: normalizedName,
        limit: parsedLimit,
        threshold: Number(threshold) || 85,
        icon: selectedIcon,
      });
    }

    setName('');
    setLimit('');
    setThreshold('85');
    setSelectedIcon(icons[0]);
  };

  return (
    <div className="bg-surface-container-low rounded-2xl p-6 md:p-7">
      <div className="mb-6">
        <h4 className="text-lg font-headline font-bold text-primary">New Category Allocation</h4>
        <p className="text-on-surface-variant text-sm mt-1">Define monthly limits for upcoming budget categories.</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-primary uppercase tracking-wide">Category Name</label>
          <input
            className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary placeholder:text-slate-400 text-sm"
            placeholder="e.g. Software Subscriptions"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-primary uppercase tracking-wide">Monthly Limit</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
              <input
                className="w-full bg-surface-container-lowest border-none rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-primary text-sm"
                placeholder="5,000"
                type="number"
                min="1"
                step="0.01"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-primary uppercase tracking-wide">Alert Threshold</label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-lowest border-none rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-primary text-sm"
                placeholder="85"
                type="number"
                min="1"
                max="100"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">%</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-primary uppercase tracking-wide">Select Icon</label>
          <div className="grid grid-cols-5 gap-3">
            {icons.map((icon) => (
              <button
                key={icon}
                className={`aspect-square rounded-xl flex items-center justify-center transition-colors border ${
                  selectedIcon === icon
                    ? 'bg-primary text-white border-primary'
                    : 'bg-surface-container-lowest hover:bg-primary hover:text-white text-on-surface-variant border-transparent'
                }`}
                type="button"
                onClick={() => setSelectedIcon(icon)}
              >
                <span className="material-symbols-outlined" data-icon={icon}>
                  {icon}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            className="w-full bg-white border border-outline-variant/30 text-primary py-3 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm"
            type="submit"
          >
            Create Category
          </button>
        </div>
      </form>

      {forecast ? (
        <div className="mt-8 pt-6 border-t border-outline-variant/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h5 className="text-base font-headline font-bold text-primary">Budget Planner</h5>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onSmartRebalance}
                className="bg-primary text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-md shadow-primary/20 hover:opacity-95 transition-all"
              >
                Smart Rebalance
              </button>
              <button
                type="button"
                onClick={onExportBudgetCsv}
                className="px-3 py-2 rounded-lg text-xs font-semibold border border-outline-variant text-primary hover:bg-surface-container-highest transition-colors"
              >
                Export CSV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="min-w-0 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10">
              <p className="text-[11px] uppercase tracking-wide text-on-surface-variant font-semibold">Projected Spend</p>
              <p className="text-base md:text-lg font-bold text-primary mt-1 leading-tight break-all">{formatCurrency(forecast.projectedSpent)}</p>
            </div>
            <div className="min-w-0 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10">
              <p className="text-[11px] uppercase tracking-wide text-on-surface-variant font-semibold">Utilization</p>
              <p className="text-base md:text-lg font-bold text-primary mt-1 leading-tight break-all">{forecast.projectedUtilization}%</p>
            </div>
            <div className="min-w-0 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10">
              <p className="text-[11px] uppercase tracking-wide text-on-surface-variant font-semibold">Variance</p>
              <p className={`text-base md:text-lg font-bold mt-1 leading-tight break-all ${forecast.varianceToBudget > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                {forecast.varianceToBudget > 0 ? '+' : ''}{formatCurrency(forecast.varianceToBudget)}
              </p>
            </div>
          </div>

          {actionNote ? <p className="text-xs text-on-surface-variant">{actionNote}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
