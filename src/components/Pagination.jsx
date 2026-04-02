export default function Pagination({ page = 1, pageSize = 5, total = 0 }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="px-8 py-4 bg-surface-container-low/30 flex items-center justify-between border-t border-slate-100">
      <p className="text-xs font-medium text-slate-400">Showing {start} to {end} of {total} transactions</p>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-slate-500">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-8 h-8 rounded-lg bg-primary text-on-primary text-xs font-bold">{page}</button>
        {totalPages > 1 && (
          <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold text-on-surface transition-colors">
            {Math.min(page + 1, totalPages)}
          </button>
        )}
        {totalPages > 2 && <span className="text-slate-300">...</span>}
        {totalPages > 2 && (
          <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold text-on-surface transition-colors">
            {totalPages}
          </button>
        )}
        <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-slate-500">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
