export default function AddCategoryForm() {
  const icons = ['cloud', 'work', 'shopping_bag', 'health_and_safety', 'more_horiz'];

  return (
    <div className="bg-surface-container-low rounded-2xl p-6 md:p-7">
      <div className="mb-6">
        <h4 className="text-lg font-headline font-bold text-primary">New Category Allocation</h4>
        <p className="text-on-surface-variant text-sm mt-1">Define monthly limits for upcoming budget categories.</p>
      </div>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-primary uppercase tracking-wide">Category Name</label>
          <input
            className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary placeholder:text-slate-400 text-sm"
            placeholder="e.g. Software Subscriptions"
            type="text"
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
                className="aspect-square bg-surface-container-lowest hover:bg-primary hover:text-white rounded-xl flex items-center justify-center text-on-surface-variant transition-colors border border-transparent"
                type="button"
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
    </div>
  );
}
