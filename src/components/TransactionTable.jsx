import TransactionRow from './TransactionRow';
import { formatCurrency, formatShortDate } from '../utils/financeData';

export default function TransactionTable({ transactions = [], onEditTransaction, onDeleteTransaction }) {
  const tableRows = transactions.map((tx) => ({
    id: tx.id,
    date: formatShortDate(tx.date),
    description: tx.description,
    memo: `${tx.category} entry`,
    icon: tx.icon,
    bgColor: tx.type === 'income' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600',
    category: tx.category,
    categoryColor: tx.type === 'income' ? 'bg-secondary-fixed text-on-secondary-container' : 'bg-slate-100 text-slate-700',
    type: tx.type,
    amount: `${tx.type === 'income' ? '+' : '-'}${formatCurrency(tx.amount)}`,
    isPending: false,
  }));

  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-x-auto shadow-sm ring-1 ring-slate-200/10">
      <table className="w-full text-left border-collapse min-w-max md:min-w-0">
        <thead>
          <tr className="bg-surface-container-low/50">
            <th className="px-3 md:px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Date</th>
            <th className="px-3 md:px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Description</th>
            <th className="px-3 md:px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Category</th>
            <th className="px-3 md:px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Type</th>
            <th className="px-3 md:px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right whitespace-nowrap">Amount</th>
            <th className="px-3 md:px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tableRows.length ? (
            tableRows.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                onEdit={onEditTransaction}
                onDelete={onDeleteTransaction}
              />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-3 md:px-6 py-12 text-center text-sm text-slate-500 font-medium">
                No transactions found for the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
