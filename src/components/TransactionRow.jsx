export default function TransactionRow({ transaction, onEdit, onDelete, canEdit = true }) {
  return (
    <tr className={`hover:bg-surface-container-low/40 transition-colors group ${transaction.isPending ? 'opacity-75 grayscale-[0.5]' : ''}`}>
      <td className="px-6 py-5 text-sm font-medium text-slate-500 font-body">{transaction.date}</td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.bgColor}`}>
            <span className="material-symbols-outlined">{transaction.icon}</span>
          </div>
          <div>
            <p className="text-sm font-bold text-primary font-headline">{transaction.description}</p>
            <p className="text-xs text-slate-400 font-body">{transaction.memo}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${transaction.categoryColor}`}>
          {transaction.category}
        </span>
      </td>
      <td className="px-6 py-5">
        {transaction.isPending ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
            Pending
          </span>
        ) : (
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${transaction.type === 'income' ? 'bg-secondary' : 'bg-error'}`}></span>
            <span className="text-sm font-medium text-on-surface-variant">{transaction.type === 'income' ? 'Income' : 'Expense'}</span>
          </div>
        )}
      </td>
      <td className={`px-6 py-5 text-right font-headline font-extrabold ${transaction.type === 'income' ? 'text-secondary' : 'text-primary'}`}>
        {transaction.amount}
      </td>
      {canEdit ? (
        <td className="px-6 py-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <button type="button" onClick={() => onEdit?.(transaction)} className="p-1.5 hover:bg-secondary-fixed rounded-lg text-secondary transition-colors">
              <span className="material-symbols-outlined text-lg">edit</span>
            </button>
            <button type="button" onClick={() => onDelete?.(transaction)} className="p-1.5 hover:bg-error-container rounded-lg text-error transition-colors">
              <span className="material-symbols-outlined text-lg">delete</span>
            </button>
          </div>
        </td>
      ) : null}
    </tr>
  );
}
