import { formatCurrency } from '../utils/financeData';

export default function AccountsHeader({ totalLiquidity, changePct, onConnectAccount, canEdit = true }) {
  const changeLabel = `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`;

  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-on-surface-variant font-semibold text-sm uppercase tracking-widest mb-1">Global Net Liquidity</h2>
        <div className="flex items-baseline gap-4">
          <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight">{formatCurrency(totalLiquidity)}</h1>
          <span className="flex items-center text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-lg text-sm">
            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
            {changeLabel}
          </span>
        </div>
        <p className="text-on-surface-variant text-sm mt-2">Aggregated real-time balance across 3 connected sources</p>
      </div>
      <div className="w-full md:w-auto flex md:justify-end">
        {canEdit ? (
          <button
            type="button"
            onClick={onConnectAccount}
            className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-xl font-headline font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/10"
          >
            <span className="material-symbols-outlined">add_link</span>
            Connect New Account
          </button>
        ) : (
          <div className="w-full md:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-500 font-semibold text-center">
            Viewer mode
          </div>
        )}
      </div>
    </div>
  );
}
