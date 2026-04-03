export default function PageHeader({ totalTransactions = 0, onAddTransaction }) {
  return (
    <div className="px-4 md:px-8 pt-4 md:pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-primary tracking-tight">Transactions</h2>
        <p className="text-on-surface-variant font-body mt-1 text-sm md:text-base">Manage and audit your real-time financial flows. {totalTransactions} records found.</p>
      </div>
      <button
        type="button"
        onClick={onAddTransaction}
        className="flex items-center gap-2 bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-headline font-semibold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-sm md:text-base whitespace-nowrap"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          add_circle
        </span>
        <span className="hidden md:inline">Add Transaction</span>
        <span className="md:hidden">Add</span>
      </button>
    </div>
  );
}
