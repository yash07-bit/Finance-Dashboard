export default function CategoryCard({ category }) {
  const isOverLimit = category.status === 'over';
  const statusColor = {
    normal: 'bg-surface-container-lowest',
    near: 'bg-surface-container-lowest',
    at: 'bg-surface-container-lowest',
    over: 'bg-surface-container-lowest border-2 border-error/5',
  };

  const barColor = {
    normal: 'bg-green-500',
    near: 'bg-orange-400',
    at: 'bg-blue-600',
    over: 'bg-error',
  };

  const statusBadgeColor = {
    normal: 'text-green-600 font-medium',
    near: 'text-orange-600 font-medium',
    at: 'text-on-surface-variant',
    over: 'text-error font-medium',
  };

  return (
    <div className={`${statusColor[category.status]} p-5 rounded-2xl shadow-sm shadow-slate-200/20 relative overflow-hidden`}>
      {isOverLimit && (
        <div className="absolute top-0 right-0 p-2">
          <span className="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
            Over Limit
          </span>
        </div>
      )}
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${category.iconBg}`}>
            <span className="material-symbols-outlined" data-icon={category.icon}>
              {category.icon}
            </span>
          </div>
          <div className="min-w-0">
            <h5 className="font-semibold text-primary truncate">{category.name}</h5>
            <p className={`text-xs leading-5 ${statusBadgeColor[category.status]}`}>{category.statusLabel}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className={`font-semibold ${isOverLimit ? 'text-error' : 'text-primary'}`}>
            ${category.spent} / ${category.limit}
          </p>
          <p className="text-[11px] text-on-surface-variant uppercase tracking-wide">Spent vs limit</p>
        </div>
      </div>
      <div className={`h-2 w-full ${isOverLimit ? 'bg-error-container' : 'bg-surface-container-high'} rounded-full overflow-hidden`}>
        <div className={`h-full ${barColor[category.status]} transition-all`} style={{ width: `${category.percentage}%` }}></div>
      </div>
    </div>
  );
}
