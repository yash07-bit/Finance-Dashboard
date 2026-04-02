import ActivityRow from './ActivityRow';

export default function WalletActivity() {
  const activities = [
    {
      icon: 'trending_up',
      iconBg: 'bg-emerald-100 text-emerald-700',
      title: 'Dividend Reinvestment',
      subtitle: 'Vanguard Index Fund',
      account: 'JP Morgan Chase',
      amount: '+$2,450.00',
      amountColor: 'text-emerald-600',
      status: 'Completed',
      statusColor: 'bg-surface-container-highest text-on-surface-variant',
    },
    {
      icon: 'currency_bitcoin',
      iconBg: 'bg-blue-100 text-blue-700',
      title: 'Ethereum Purchase',
      subtitle: 'Market Order @ $2,410.12',
      account: 'Ledger Cold Storage',
      amount: '-$12,000.00',
      amountColor: 'text-on-surface',
      status: 'Settling',
      statusColor: 'bg-blue-50 text-blue-700',
    },
    {
      icon: 'move_down',
      iconBg: 'bg-slate-100 text-slate-700',
      title: 'Internal Transfer',
      subtitle: 'Chase to Vault',
      account: 'Vault Reserves',
      amount: '+$5,000.00',
      amountColor: 'text-emerald-600',
      status: 'Completed',
      statusColor: 'bg-surface-container-highest text-on-surface-variant',
    },
  ];

  return (
    <div className="lg:col-span-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline font-bold text-xl text-primary">Recent Wallet Activity</h3>
        <button className="text-secondary font-semibold text-sm flex items-center gap-1 hover:underline">
          Export CSV{' '}
          <span className="material-symbols-outlined text-sm">download</span>
        </button>
      </div>
      <div className="bg-surface-container-low rounded-2xl p-2">
        <table className="w-full text-left border-separate" style={{ borderSpacing: '0 0.5rem' }}>
          <thead>
            <tr className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-3">Transaction</th>
              <th className="px-6 py-3">Account</th>
              <th className="px-6 py-3 text-right">Amount</th>
              <th className="px-6 py-3 text-right">Status</th>
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
