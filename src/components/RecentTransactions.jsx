import { formatCurrency, formatShortDate } from '../utils/financeData';
import { useNavigate } from 'react-router-dom';

export default function RecentTransactions({ transactions = [] }) {
  const navigate = useNavigate();

  const getCategoryColor = (category) => {
    if (category.toLowerCase() === 'investment') return 'bg-success/10 text-success font-semibold';
    return 'bg-primary/5 text-primary font-semibold';
  };

  const getAmountColor = (type) => {
    return type === 'income' ? 'text-success font-bold' : 'text-primary font-bold';
  };

  return (
    <section className="bg-white rounded-xl overflow-hidden shadow-md border border-border-light">
      <div className="p-4 md:p-6 border-b border-border-light flex justify-between items-center gap-2">
        <h3 className="text-base md:text-lg font-bold text-primary">Recent Transactions</h3>
        <button
          type="button"
          onClick={() => navigate('/transactions')}
          className="text-primary-accent font-semibold text-xs md:text-sm hover:opacity-80 transition-opacity flex items-center gap-1 whitespace-nowrap"
        >
          View All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-max md:min-w-0">
          <thead>
            <tr className="bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold">
              <th className="px-3 md:px-6 py-4 whitespace-nowrap">Transaction Date</th>
              <th className="px-3 md:px-6 py-4 whitespace-nowrap">Description</th>
              <th className="px-3 md:px-6 py-4 whitespace-nowrap">Category</th>
              <th className="px-3 md:px-6 py-4 text-right whitespace-nowrap">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-primary/2 transition-colors group">
                <td className="px-3 md:px-6 py-5 text-xs md:text-sm font-medium text-text-muted whitespace-nowrap">{formatShortDate(transaction.date)}</td>
                <td className="px-3 md:px-6 py-5">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-8 md:w-10 h-8 md:h-10 ${transaction.type === 'income' ? 'bg-success/10 text-success' : 'bg-primary-accent/10 text-primary-accent'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-base md:text-lg">{transaction.icon}</span>
                    </div>
                    <span className="font-semibold text-primary text-sm md:text-base truncate">{transaction.description}</span>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-5">
                  <span className={`${getCategoryColor(transaction.category)} px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs whitespace-nowrap`}>
                    {transaction.category.toUpperCase()}
                  </span>
                </td>
                <td className={`px-3 md:px-6 py-5 text-right ${getAmountColor(transaction.type)} text-xs md:text-sm whitespace-nowrap`}>
                  {`${transaction.type === 'income' ? '+' : '-'}${formatCurrency(transaction.amount)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
