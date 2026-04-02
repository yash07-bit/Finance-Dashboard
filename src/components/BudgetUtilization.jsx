export default function BudgetUtilization({ utilizationPct, variancePct }) {
  const varianceLabel = `${Math.abs(variancePct).toFixed(1)}%`;
  const direction = variancePct <= 0 ? 'below' : 'above';

  return (
    <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <p className="text-on-surface-variant font-medium text-xs uppercase tracking-widest mb-4">Budget Utilization</p>
        <div className="relative h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-secondary-container transition-all" style={{ width: `${Math.min(100, utilizationPct)}%` }}></div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-3xl font-bold text-primary font-headline">{utilizationPct}%</span>
          <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">
            <span className="material-symbols-outlined text-sm mr-1" data-icon="trending_up">
              trending_up
            </span>
            On Track
          </div>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        Your spending is currently <span className="text-primary font-bold">{direction} target</span> by {varianceLabel} based on the latest budget totals.
      </p>
    </div>
  );
}
