import { useEffect, useMemo, useState } from 'react';

import PageHeader from './PageHeader';
import FilterBar from './FilterBar';
import TransactionTable from './TransactionTable';
import Pagination from './Pagination';
import { useAppData } from '../context/useAppData';

export default function TransactionsContent() {
  const pageSize = 5;
  const { data, addTransaction, updateTransaction, deleteTransaction } = useAppData();
  const [transactions, setTransactions] = useState(() => data.transactions);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('30d');
  const [sortOrder, setSortOrder] = useState('newest');
  const [page, setPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTransactionId, setEditingTransactionId] = useState(null);
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    category: '',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().slice(0, 10),
  });

  // Sync with context data - critical for data reflection
  useEffect(() => {
    setTransactions(data.transactions);
    setPage(1); // Reset to first page when data changes
  }, [data.transactions]);

  const categoryOptions = useMemo(
    () => [...new Set(transactions.map((tx) => tx.category))].sort((a, b) => a.localeCompare(b)),
    [transactions],
  );

  const referenceDate = useMemo(() => {
    const maxTimestamp = Math.max(...transactions.map((tx) => new Date(tx.date).getTime()));
    return Number.isFinite(maxTimestamp) ? new Date(maxTimestamp) : new Date();
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    const minDate = (() => {
      if (selectedDateRange === 'all') return null;
      const days = selectedDateRange === '90d' ? 90 : 30;
      const nextDate = new Date(referenceDate);
      nextDate.setDate(nextDate.getDate() - days);
      return nextDate;
    })();

    return [...transactions]
      .filter((tx) => (selectedCategory === 'all' ? true : tx.category === selectedCategory))
      .filter((tx) => (selectedType === 'all' ? true : tx.type === selectedType))
      .filter((tx) => (minDate ? new Date(tx.date) >= minDate : true))
      .sort((a, b) => {
        const diff = new Date(b.date) - new Date(a.date);
        return sortOrder === 'newest' ? diff : -diff;
      });
  }, [referenceDate, selectedCategory, selectedDateRange, selectedType, sortOrder, transactions]);

  const totalPages = Math.max(1, Math.ceil(filteredTransactions.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [selectedCategory, selectedDateRange, selectedType, sortOrder]);

  const pageTransactions = filteredTransactions.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = (nextPage) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  const openAddModal = () => {
    setEditingTransactionId(null);
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setEditingTransactionId(null);
    setNewTransaction({
      description: '',
      category: '',
      amount: '',
      type: 'expense',
      date: new Date().toISOString().slice(0, 10),
    });
  };

  const handleCreateTransaction = (event) => {
    event.preventDefault();

    const amount = Number(newTransaction.amount);
    if (!newTransaction.description.trim() || !newTransaction.category.trim() || !newTransaction.date || Number.isNaN(amount) || amount <= 0) {
      return;
    }

    // Add to context instead of local state
    addTransaction({
      date: newTransaction.date,
      description: newTransaction.description.trim(),
      category: newTransaction.category.trim(),
      icon: newTransaction.type === 'income' ? 'payments' : 'receipt_long',
      amount,
      type: newTransaction.type,
    });

    closeAddModal();
    setPage(1);
  };

  const openEditModal = (transaction) => {
    setEditingTransactionId(transaction.id);
    setNewTransaction({
      description: transaction.description ?? '',
      category: transaction.category ?? '',
      amount: String(transaction.amount ?? '').replace(/[^\d.]/g, ''),
      type: transaction.type === 'income' ? 'income' : 'expense',
      date: transaction.date ?? new Date().toISOString().slice(0, 10),
    });
    setIsAddModalOpen(true);
  };

  const handleSaveTransaction = (event) => {
    event.preventDefault();

    const amount = Number(newTransaction.amount);
    if (!newTransaction.description.trim() || !newTransaction.category.trim() || !newTransaction.date || Number.isNaN(amount) || amount <= 0) {
      return;
    }

    const transactionPayload = {
      date: newTransaction.date,
      description: newTransaction.description.trim(),
      category: newTransaction.category.trim(),
      icon: newTransaction.type === 'income' ? 'payments' : 'receipt_long',
      amount,
      type: newTransaction.type,
    };

    if (editingTransactionId) {
      updateTransaction(editingTransactionId, transactionPayload);
    } else {
      addTransaction(transactionPayload);
    }

    closeAddModal();
    setPage(1);
  };

  const handleDeleteTransaction = (transaction) => {
    const confirmDelete = window.confirm(`Delete ${transaction.description}?`);
    if (!confirmDelete) return;

    deleteTransaction(transaction.id);
    setPage(1);
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader totalTransactions={filteredTransactions.length} onAddTransaction={openAddModal} />

      {/* Filter Bar */}
      <FilterBar
        categoryOptions={categoryOptions}
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        selectedDateRange={selectedDateRange}
        sortOrder={sortOrder}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        onDateRangeChange={setSelectedDateRange}
        onSortToggle={() => setSortOrder((currentSort) => (currentSort === 'newest' ? 'oldest' : 'newest'))}
      />

      {/* Transaction Content */}
      <div className="px-4 md:px-8 pb-8 md:pb-12 flex-1">
        <TransactionTable
          transactions={pageTransactions}
          onEditTransaction={openEditModal}
          onDeleteTransaction={handleDeleteTransaction}
        />
        <Pagination
          page={page}
          pageSize={pageSize}
          total={filteredTransactions.length}
          onPageChange={handlePageChange}
        />
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-y-0 left-0 md:left-64 right-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 md:px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-base md:text-lg font-bold text-primary">{editingTransactionId ? 'Edit Transaction' : 'Add Transaction'}</h3>
              <button type="button" onClick={closeAddModal} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Description</label>
                  <input
                    type="text"
                    value={newTransaction.description}
                    onChange={(event) => setNewTransaction((current) => ({ ...current, description: event.target.value }))}
                    placeholder="e.g. Office Internet"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Category</label>
                  <input
                    type="text"
                    value={newTransaction.category}
                    onChange={(event) => setNewTransaction((current) => ({ ...current, category: event.target.value }))}
                    placeholder="e.g. Operations"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Type</label>
                  <select
                    value={newTransaction.type}
                    onChange={(event) => setNewTransaction((current) => ({ ...current, type: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Amount</label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={newTransaction.amount}
                    onChange={(event) => setNewTransaction((current) => ({ ...current, amount: event.target.value }))}
                    placeholder="0.00"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Date</label>
                  <input
                    type="date"
                    value={newTransaction.date}
                    onChange={(event) => setNewTransaction((current) => ({ ...current, date: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                    required
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={closeAddModal} className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90">
                  {editingTransactionId ? 'Update Transaction' : 'Save Transaction'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
