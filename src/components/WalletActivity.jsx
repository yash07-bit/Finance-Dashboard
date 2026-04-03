import ActivityRow from './ActivityRow';
import { useMemo } from 'react';
import { getAccounts, getRecentTransactions, formatCurrency } from '../utils/financeData';

export default function WalletActivity() {
  const recentTransactions = getRecentTransactions();
  const accounts = getAccounts();

  const activities = useMemo(
    () => recentTransactions.slice(0, 3).map((transaction, index) => {
      const matchedAccount = accounts[index % accounts.length];
      const iconMap = {
        income: { icon: 'trending_up', iconBg: 'bg-emerald-100 text-emerald-700', amountColor: 'text-emerald-600' },
        expense: { icon: transaction.category.toLowerCase().includes('crypto') ? 'currency_bitcoin' : 'move_down', iconBg: index === 1 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700', amountColor: 'text-on-surface' },
      };
      const amountValue = transaction.type === 'income' ? `+${formatCurrency(transaction.amount)}` : `-${formatCurrency(transaction.amount)}`;

      return {
        icon: transaction.type === 'income' ? iconMap.income.icon : iconMap.expense.icon,
        iconBg: transaction.type === 'income' ? iconMap.income.iconBg : iconMap.expense.iconBg,
        title: transaction.description,
        subtitle: `${transaction.category}${transaction.type === 'expense' ? ' • Posted' : ' • Settled'}`,
        account: matchedAccount ? matchedAccount.name : 'Connected Account',
        amount: amountValue,
        amountColor: transaction.type === 'income' ? iconMap.income.amountColor : iconMap.expense.amountColor,
        status: transaction.type === 'income' ? 'Completed' : index === 1 ? 'Settling' : 'Completed',
        statusColor: transaction.type === 'income'
          ? 'bg-surface-container-highest text-on-surface-variant'
          : index === 1
            ? 'bg-blue-50 text-blue-700'
            : 'bg-surface-container-highest text-on-surface-variant',
      };
    }),
    [recentTransactions, accounts],
  );

  const handleExportCsv = () => {
    const csv = [
      'Transaction,Account,Amount,Status',
      ...activities.map((activity) => `${activity.title},${activity.account},${activity.amount},${activity.status}`),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wallet-activity.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="lg:col-span-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline font-bold text-xl text-primary">Recent Wallet Activity</h3>
        <button type="button" onClick={handleExportCsv} className="text-secondary font-semibold text-sm flex items-center gap-1 hover:underline">
          Export CSV{' '}
          <span className="material-symbols-outlined text-sm">download</span>
        </button>
      </div>
      <div className="bg-surface-container-low rounded-2xl p-2 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left border-separate" style={{ borderSpacing: '0 0.5rem' }}>
          <thead>
            <tr className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
              <th className="px-4 md:px-6 py-3 whitespace-nowrap">Transaction</th>
              <th className="px-4 md:px-6 py-3 whitespace-nowrap">Account</th>
              <th className="px-4 md:px-6 py-3 text-right whitespace-nowrap">Amount</th>
              <th className="px-4 md:px-6 py-3 text-right whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {activities.map((activity, index) => (
              <ActivityRow key={index} activity={activity} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
