export default function MonthlyComparison() {
  return (
    <div className="bg-surface-container-low p-8 rounded-xl flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Monthly Comparison</h3>
          <div className="flex items-center gap-4">
            <p className="text-4xl font-extrabold font-headline">+12.4%</p>
            <div className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-bold">
              <span className="material-symbols-outlined text-sm" data-icon="trending_up">
                trending_up
              </span>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm mt-2">Net Liquidity change vs previous month</p>
        </div>
      </div>
      <div className="mt-8 h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div className="h-full bg-primary w-[72%] rounded-full"></div>
      </div>
    </div>
  );
}
