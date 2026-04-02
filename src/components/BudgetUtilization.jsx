export default function BudgetUtilization({ utilizationPct, variancePct }) {
  const varianceLabel = `${Math.abs(variancePct).toFixed(1)}%`;
  const direction = variancePct <= 0 ? 'below' : 'above';
  const clampedPct = Math.min(100, Math.max(0, utilizationPct));

  let statusText = 'On Track';
  let statusStyles = 'text-green-600 bg-green-50';
  let statusIcon = 'trending_up';
  let progressStyles = 'bg-secondary-container';

  if (utilizationPct >= 100) {
    statusText = 'Over Budget';
    statusStyles = 'text-red-600 bg-red-50';
    statusIcon = 'trending_down';
    progressStyles = 'bg-red-500';
  } else if (utilizationPct >= 90) {
    statusText = 'Near Limit';
    statusStyles = 'text-amber-600 bg-amber-50';
    statusIcon = 'trending_flat';
    progressStyles = 'bg-amber-500';
  }

  return (
    <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <p className="text-on-surface-variant font-medium text-xs uppercase tracking-widest mb-4">Budget Utilization</p>
        <div className="relative h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div className={`absolute top-0 left-0 h-full transition-all ${progressStyles}`} style={{ width: `${clampedPct}%` }}></div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-3xl font-bold text-primary font-headline">{utilizationPct}%</span>
          <div className={`flex items-center px-2 py-1 rounded text-xs font-bold ${statusStyles}`}>
            <span className="material-symbols-outlined text-sm mr-1" data-icon={statusIcon}>
              {statusIcon}
            </span>
            {statusText}
          </div>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        Your spending is currently <span className="text-primary font-bold">{direction} target</span> by {varianceLabel} based on the latest budget totals.
      </p>
    </div>
  );
}
