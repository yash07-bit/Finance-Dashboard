import PageHeader from './PageHeader';
import FilterBar from './FilterBar';
import TransactionTable from './TransactionTable';
import Pagination from './Pagination';
import { getRecentTransactions, mockTransactions } from '../utils/mockData';

export default function TransactionsContent() {
  const pageSize = 5;
  const transactions = getRecentTransactions(mockTransactions, mockTransactions.length);
  const pageTransactions = transactions.slice(0, pageSize);

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader totalTransactions={transactions.length} />

      {/* Filter Bar */}
      <FilterBar />

      {/* Transaction Content */}
      <div className="px-8 pb-12 flex-1">
        <TransactionTable transactions={pageTransactions} />
        <Pagination page={1} pageSize={pageSize} total={transactions.length} />
      </div>
    </div>
  );
}
