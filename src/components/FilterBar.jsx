export default function FilterBar() {
  const filters = [
    {
      id: 'category',
      icon: 'filter_list',
      label: 'Category: All',
    },
    {
      id: 'type',
      icon: 'payments',
      label: 'Type: Income/Expense',
    },
    {
      id: 'date',
      icon: 'calendar_today',
      label: 'Date: Last 30 Days',
    },
  ];

  return (
    <div className="px-8 py-4 flex gap-4 items-center overflow-x-auto whitespace-nowrap">
      {filters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-on-surface-variant text-lg">{filter.icon}</span>
          <span className="text-sm font-medium text-on-surface">{filter.label}</span>
          <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
        </div>
      ))}

      <div className="ml-auto flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sorted by</span>
        <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
          Newest First
          <span className="material-symbols-outlined text-sm">swap_vert</span>
        </button>
      </div>
    </div>
  );
}
