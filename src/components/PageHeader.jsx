export default function PageHeader({ totalTransactions = 0 }) {
  return (
    <div className="px-8 pt-8 pb-4 flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Transactions</h2>
        <p className="text-on-surface-variant font-body mt-1">Manage and audit your real-time financial flows. {totalTransactions} records found.</p>
      </div>
      <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-headline font-semibold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          add_circle
        </span>
        Add Transaction
      </button>
    </div>
  );
}
