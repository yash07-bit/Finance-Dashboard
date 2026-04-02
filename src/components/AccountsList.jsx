import AccountCard from './AccountCard';
import { formatCurrency } from '../utils/mockData';

export default function AccountsList({ accounts = [] }) {
  const typeStyle = {
    banking: {
      icon: 'account_balance',
      iconBg: 'bg-primary',
      badge: 'Primary',
      badgeColor: 'bg-blue-100 text-blue-700',
      borderColor: 'bg-primary',
      label: 'Corporate Banking',
    },
    digital: {
      icon: 'key',
      iconBg: 'bg-slate-900',
      badge: 'Digital Asset',
      badgeColor: 'bg-purple-100 text-purple-700',
      borderColor: 'bg-secondary-container',
      label: 'Digital Wallet',
    },
    physical: {
      icon: 'lock',
      iconBg: 'bg-tertiary-fixed-dim text-on-tertiary-container',
      badge: 'Reserve',
      badgeColor: 'bg-amber-100 text-amber-700',
      borderColor: 'bg-tertiary-fixed-dim',
      label: 'Physical Assets',
    },
  };

  const mappedAccounts = accounts.map((acc) => ({
    ...acc,
    ...typeStyle[acc.type],
    typeText: `${typeStyle[acc.type]?.label ?? 'Account'} ••${acc.last4}`,
    balanceText: formatCurrency(acc.balance),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {mappedAccounts.map((account) => (
        <AccountCard key={account.name} account={account} />
      ))}
    </div>
  );
}
