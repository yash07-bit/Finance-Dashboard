const dateOptions = [
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last 90 Days' },
  { value: 'all', label: 'All Time' },
];

function SelectField({ value, onChange, ariaLabel, children, widthClass = 'w-[150px]' }) {
  return (
    <div className={widthClass}>
      <select
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
      >
        {children}
      </select>
    </div>
  );
}

export default function FilterBar({
  categoryOptions = [],
  selectedCategory = 'all',
  selectedType = 'all',
  selectedDateRange = '30d',
  sortOrder = 'newest',
  onCategoryChange,
  onTypeChange,
  onDateRangeChange,
  onSortToggle,
}) {
  return (
    <div className="px-4 md:px-8 py-4">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex items-center justify-between gap-3 bg-white px-3 py-2.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-slate-500 text-lg">filter_list</span>
              <span className="text-sm font-semibold text-slate-700 truncate">Category</span>
            </div>
            <SelectField
              value={selectedCategory}
              onChange={(event) => onCategoryChange?.(event.target.value)}
              ariaLabel="Filter by category"
              widthClass="w-auto"
            >
              <option value="all">All</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </SelectField>
          </div>

          <div className="flex items-center justify-between gap-3 bg-white px-3 py-2.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-slate-500 text-lg">payments</span>
              <span className="text-sm font-semibold text-slate-700">Type</span>
            </div>
            <SelectField
              value={selectedType}
              onChange={(event) => onTypeChange?.(event.target.value)}
              ariaLabel="Filter by transaction type"
              widthClass="w-[160px]"
            >
              <option value="all">Income/Expense</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </SelectField>
          </div>

          <div className="flex items-center justify-between gap-3 bg-white px-3 py-2.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-slate-500 text-lg">calendar_today</span>
              <span className="text-sm font-semibold text-slate-700">Date</span>
            </div>
            <SelectField
              value={selectedDateRange}
              onChange={(event) => onDateRangeChange?.(event.target.value)}
              ariaLabel="Filter by date range"
              widthClass="w-[160px]"
            >
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </SelectField>
          </div>

          <div className="flex items-center justify-between gap-3 bg-white px-3 py-2.5 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Sorted by</span>
            <button type="button" onClick={onSortToggle} className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
              {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
              <span className="material-symbols-outlined text-sm">swap_vert</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
