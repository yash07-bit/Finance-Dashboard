import { useMemo, useState } from 'react';

import PageHeader from './PageHeader';
import FilterBar from './FilterBar';
import TransactionTable from './TransactionTable';
import Pagination from './Pagination';
import { getRecentTransactions, getTransactions } from '../utils/financeData';

export default function TransactionsContent() {
  const pageSize = 5;
  const transactions = useMemo(() => getRecentTransactions(getTransactions(), 9999), []);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(transactions.length / pageSize));

  const pageTransactions = transactions.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = (nextPage) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader totalTransactions={transactions.length} />

      {/* Filter Bar */}
      <FilterBar />

      {/* Transaction Content */}
      <div className="px-8 pb-12 flex-1">
        <TransactionTable transactions={pageTransactions} />
        <Pagination
          page={page}
          pageSize={pageSize}
          total={transactions.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
