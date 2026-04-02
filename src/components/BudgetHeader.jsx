export default function BudgetHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-primary">Monthly Budgets</h2>
        <p className="text-text-muted mt-2 text-sm font-medium">Fiscal year 2024 • Admin overview</p>
      </div>
      <button className="bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-primary/20 hover:opacity-95 transition-all flex items-center gap-2 self-start sm:self-auto">
        <span className="material-symbols-outlined text-lg" data-icon="tune">
          tune
        </span>
        Adjust Allocations
      </button>
    </div>
  );
}
