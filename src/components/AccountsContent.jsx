import { useState } from 'react';
import { useEffect } from 'react';
import AccountsHeader from './AccountsHeader';
import AccountsList from './AccountsList';
import WalletActivity from './WalletActivity';
import SecurityHealth from './SecurityHealth';
import { getBalanceSeries } from '../utils/financeData';
import { useAppData } from '../context/useAppData';

export default function AccountsContent() {
  const { data, updateAccount, addAccount: addAccountToContext, canEdit } = useAppData();
  const accounts = data.accounts;
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [editingAccountId, setEditingAccountId] = useState(null);
  const [newAccount, setNewAccount] = useState({ name: '', institution: '', balance: '', type: 'cash' });
  const [editAccount, setEditAccount] = useState({ name: '', balance: '', type: 'banking', last4: '' });

  // Pass transactions to calculate dynamic balance series
  const balanceSeries = getBalanceSeries(data.transactions);
  const totalLiquidity = accounts.reduce((sum, account) => sum + account.balance, 0);
  const firstBalance = balanceSeries[0]?.balance ?? 0;
  const latestBalance = balanceSeries.at(-1)?.balance ?? 0;
  const liquidityChangePct = firstBalance ? ((latestBalance - firstBalance) / firstBalance) * 100 : 0;

  const handleConnectAccount = () => {
    if (!canEdit) return;

    setShowConnectModal(true);
  };

  useEffect(() => {
    if (!canEdit) {
      setShowConnectModal(false);
      setEditingAccountId(null);
    }
  }, [canEdit]);

  const handleOpenEditAccount = (account) => {
    setEditingAccountId(account.id);
    setEditAccount({
      name: account.name ?? '',
      balance: String(account.balance ?? ''),
      type: account.type ?? 'banking',
      last4: account.last4 ?? '',
    });
  };

  const handleSaveAccountEdit = (event) => {
    event.preventDefault();

    const parsedBalance = Number(editAccount.balance);
    const normalizedName = editAccount.name.trim();
    const normalizedLast4 = editAccount.last4.trim().slice(-4);

    if (!normalizedName || !Number.isFinite(parsedBalance) || parsedBalance < 0) return;

    if (!canEdit) return;

    updateAccount(editingAccountId, {
      name: normalizedName,
      balance: parsedBalance,
      type: editAccount.type,
      last4: normalizedLast4,
    });
    setEditingAccountId(null);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();

    const balance = Number(newAccount.balance);
    const accountName = newAccount.name.trim();
    const institution = newAccount.institution.trim();

    if (!accountName || !institution || !Number.isFinite(balance) || balance <= 0) return;

    if (!canEdit) return;

    addAccountToContext({
      name: accountName,
      institution,
      balance,
      type: newAccount.type,
    });
    setNewAccount({ name: '', institution: '', balance: '', type: 'cash' });
    setShowConnectModal(false);
  };

  return (
    <section className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Global Net Liquidity Hero */}
      <AccountsHeader
        totalLiquidity={totalLiquidity}
        changePct={liquidityChangePct}
        onConnectAccount={handleConnectAccount}
        canEdit={canEdit}
      />

      {/* Account Cards */}
      <AccountsList accounts={accounts} onEditAccount={handleOpenEditAccount} canEdit={canEdit} />

      {/* Bottom Content: Transactions & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
        <WalletActivity />
        <SecurityHealth />
      </div>

      {showConnectModal && canEdit ? (
        <div className="fixed inset-y-0 left-0 md:left-64 right-0 z-[80] bg-slate-900/45 flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 md:px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-base md:text-lg font-bold text-primary">Connect New Account</h3>
              <button type="button" onClick={() => setShowConnectModal(false)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateAccount} className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Account Name</label>
                  <input
                    type="text"
                    value={newAccount.name}
                    onChange={(event) => setNewAccount((current) => ({ ...current, name: event.target.value }))}
                    placeholder="e.g. Operating Cash"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Institution</label>
                  <input
                    type="text"
                    value={newAccount.institution}
                    onChange={(event) => setNewAccount((current) => ({ ...current, institution: event.target.value }))}
                    placeholder="e.g. Chase Bank"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Balance</label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={newAccount.balance}
                    onChange={(event) => setNewAccount((current) => ({ ...current, balance: event.target.value }))}
                    placeholder="0.00"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Type</label>
                  <select
                    value={newAccount.type}
                    onChange={(event) => setNewAccount((current) => ({ ...current, type: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                  >
                    <option value="cash">Cash</option>
                    <option value="investment">Investment</option>
                    <option value="credit">Credit</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={() => setShowConnectModal(false)} className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90">
                  Connect Account
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {editingAccountId && canEdit ? (
        <div className="fixed inset-0 z-[80] bg-slate-900/45 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-base sm:text-lg font-bold text-primary">Edit Account</h3>
              <button type="button" onClick={() => setEditingAccountId(null)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveAccountEdit} className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Account Name</label>
                  <input
                    type="text"
                    value={editAccount.name}
                    onChange={(event) => setEditAccount((current) => ({ ...current, name: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Balance</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={editAccount.balance}
                    onChange={(event) => setEditAccount((current) => ({ ...current, balance: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Last 4</label>
                  <input
                    type="text"
                    maxLength="4"
                    value={editAccount.last4}
                    onChange={(event) => setEditAccount((current) => ({ ...current, last4: event.target.value.replace(/\D/g, '') }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    placeholder="0000"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Type</label>
                  <select
                    value={editAccount.type}
                    onChange={(event) => setEditAccount((current) => ({ ...current, type: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                  >
                    <option value="banking">Banking</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-end gap-3">
                <button type="button" onClick={() => setEditingAccountId(null)} className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
