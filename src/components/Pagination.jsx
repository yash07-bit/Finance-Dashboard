export default function Pagination({ page = 1, pageSize = 5, total = 0, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  const canGoBack = page > 1;
  const canGoForward = page < totalPages;
  const visiblePages =
    totalPages <= 5
      ? Array.from({ length: totalPages }, (_, index) => index + 1)
      : [1, Math.max(2, page - 1), page, Math.min(totalPages - 1, page + 1), totalPages]
          .filter((value, index, array) => array.indexOf(value) === index)
          .sort((a, b) => a - b);

  return (
    <div className="px-8 py-4 bg-surface-container-low/30 flex items-center justify-between border-t border-slate-100">
      <p className="text-xs font-medium text-slate-400">Showing {start} to {end} of {total} transactions</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange?.(page - 1)}
          disabled={!canGoBack}
          className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        {visiblePages.map((pageNumber, index) => {
          const previousPage = visiblePages[index - 1];
          const hasGap = index > 0 && pageNumber - previousPage > 1;

          return (
            <span key={pageNumber} className="flex items-center gap-2">
              {hasGap && <span className="text-slate-300">...</span>}
              <button
                type="button"
                onClick={() => onPageChange?.(pageNumber)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-300 ease-out ${
                  pageNumber === page
                    ? 'bg-primary text-white shadow-md shadow-primary/40 scale-110'
                    : 'hover:bg-surface-container-high text-on-surface scale-100'
                }`}
              >
                {pageNumber}
              </button>
            </span>
          );
        })}
        <button
          type="button"
          onClick={() => onPageChange?.(page + 1)}
          disabled={!canGoForward}
          className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
