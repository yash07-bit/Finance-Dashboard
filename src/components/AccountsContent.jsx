import AccountsHeader from './AccountsHeader';
import AccountsList from './AccountsList';
import WalletActivity from './WalletActivity';
import SecurityHealth from './SecurityHealth';
import { accounts } from '../utils/mockData';

export default function AccountsContent() {
  const totalLiquidity = accounts.reduce((sum, account) => sum + account.balance, 0);
  const liquidityChangePct = 0.98;

  return (
    <section className="p-8 max-w-7xl mx-auto">
      {/* Global Net Liquidity Hero */}
      <AccountsHeader totalLiquidity={totalLiquidity} changePct={liquidityChangePct} />

      {/* Account Cards */}
      <AccountsList accounts={accounts} />

      {/* Bottom Content: Transactions & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <WalletActivity />
        <SecurityHealth />
      </div>
    </section>
  );
}
