import { createContext, useEffect, useState } from 'react';
import { getTransactions, getAccounts } from '../utils/financeData';

const DataContext = createContext();

const ROLE_STORAGE_KEY = 'nexavault-role';

export function DataProvider({ children }) {
  const [role, setRole] = useState(() => {
    if (typeof window === 'undefined') return 'admin';
    return window.localStorage.getItem(ROLE_STORAGE_KEY) || 'admin';
  });
  const [data, setData] = useState({
    transactions: getTransactions(),
    accounts: getAccounts(),
    budgets: [],
  });

  const canEdit = role === 'admin';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(ROLE_STORAGE_KEY, role);
    }
  }, [role]);

  const toggleRole = () => {
    setRole((currentRole) => (currentRole === 'admin' ? 'viewer' : 'admin'));
  };

  const withEditAccess = (handler) => (...args) => {
    if (!canEdit) return;
    return handler(...args);
  };

  // Add transaction
  const addTransaction = withEditAccess((transaction) => {
    setData((prev) => ({
      ...prev,
      transactions: [
        {
          id: Math.max(0, ...prev.transactions.map((t) => t.id || 0)) + 1,
          ...transaction,
        },
        ...prev.transactions,
      ],
    }));
  });

  // Update transaction
  const updateTransaction = withEditAccess((id, updatedTransaction) => {
    setData((prev) => ({
      ...prev,
      transactions: prev.transactions.map((t) => (t.id === id ? { ...t, ...updatedTransaction } : t)),
    }));
  });

  // Delete transaction
  const deleteTransaction = withEditAccess((id) => {
    setData((prev) => ({
      ...prev,
      transactions: prev.transactions.filter((t) => t.id !== id),
    }));
  });

  // Add account
  const addAccount = withEditAccess((account) => {
    setData((prev) => ({
      ...prev,
      accounts: [
        {
          id: Date.now(),
          ...account,
        },
        ...prev.accounts,
      ],
    }));
  });

  // Update account
  const updateAccount = withEditAccess((id, updatedAccount) => {
    setData((prev) => ({
      ...prev,
      accounts: prev.accounts.map((a) => (a.id === id ? { ...a, ...updatedAccount } : a)),
    }));
  });

  // Delete account
  const deleteAccount = withEditAccess((id) => {
    setData((prev) => ({
      ...prev,
      accounts: prev.accounts.filter((a) => a.id !== id),
    }));
  });

  // Add budget
  const addBudget = withEditAccess((budget) => {
    setData((prev) => ({
      ...prev,
      budgets: [
        {
          id: Math.max(0, ...prev.budgets.map((b) => b.id || 0)) + 1,
          ...budget,
        },
        ...prev.budgets,
      ],
    }));
  });

  // Update budget
  const updateBudget = withEditAccess((id, updatedBudget) => {
    setData((prev) => ({
      ...prev,
      budgets: prev.budgets.map((b) => (b.id === id ? { ...b, ...updatedBudget } : b)),
    }));
  });

  // Delete budget
  const deleteBudget = withEditAccess((id) => {
    setData((prev) => ({
      ...prev,
      budgets: prev.budgets.filter((b) => b.id !== id),
    }));
  });

  // Upload data from Excel
  const uploadExcelData = withEditAccess((excelData) => {
    const newData = { ...data };

    if (excelData.transactions && excelData.transactions.length > 0) {
      const formattedTransactions = excelData.transactions.map((tx, idx) => ({
        id: idx + 1,
        date: tx.Date || new Date().toISOString().slice(0, 10),
        description: tx.Description || 'Transaction',
        category: tx.Category || 'Other',
        icon: tx.Type === 'Credit' ? 'payments' : 'receipt_long',
        amount: Number(tx.Amount) || 0,
        type: tx.Type?.toLowerCase() === 'credit' ? 'income' : 'expense',
      }));
      newData.transactions = formattedTransactions;
    }

    if (excelData.budgets && excelData.budgets.length > 0) {
      const formattedBudgets = excelData.budgets.map((budget, idx) => ({
        id: idx + 1,
        name: budget.Category || 'Budget',
        limit: Number(budget.Budget_Limit) || 0,
        month: budget.Month || new Date().toLocaleString('default', { month: 'long' }),
        threshold: Number(budget.Threshold) || 85,
      }));
      newData.budgets = formattedBudgets;
    }

    if (excelData.accounts && excelData.accounts.length > 0) {
      const formattedAccounts = excelData.accounts.map((acc, idx) => ({
        id: idx + 1,
        name: acc.Account_Name || 'Account',
        type: acc.Account_Type?.toLowerCase() || 'banking',
        institution: acc.Account_Type || 'Bank',
        balance: Number(acc.Balance) || 0,
        last4: '0000',
        status: acc.Status || 'active',
      }));
      newData.accounts = formattedAccounts;
    }

    setData(newData);
  });

  const value = {
    role,
    isAdmin: role === 'admin',
    canEdit,
    toggleRole,
    data,
    setData,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    addAccount,
    updateAccount,
    deleteAccount,
    addBudget,
    updateBudget,
    deleteBudget,
    uploadExcelData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContext;
