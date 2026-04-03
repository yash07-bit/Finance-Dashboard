import SummaryCards from './SummaryCards';
import BalanceTrendChart from './BalanceTrendChart';
import CategorySpending from './CategorySpending';
import RecentTransactions from './RecentTransactions';
import {
  getCategorySpending,
  getBalanceSeries,
  getDashboardMetrics,
  getRecentTransactions,
} from '../utils/financeData';
import { useAppData } from '../context/useAppData';
import { useState, useEffect } from 'react';

export default function DashboardContent() {
  const { data } = useAppData();
  const [metrics, setMetrics] = useState(null);
  const [categorySpending, setCategorySpending] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const transactions = data.transactions;
  // Pass transactions to calculate dynamic balance series
  const balanceSeries = getBalanceSeries(transactions);

  useEffect(() => {
    setMetrics(getDashboardMetrics(transactions, balanceSeries));
    setCategorySpending(getCategorySpending(transactions));
    setRecentTransactions(getRecentTransactions(transactions, 5));
  }, [transactions, balanceSeries]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Hero Editorial Header */}
      <section className="space-y-2">
        <p className="text-text-muted font-semibold tracking-wide uppercase text-xs">Financial Overview</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Dashboard</h1>
        <p className="text-text-muted text-sm leading-relaxed">Track your wealth growth, spending patterns, and recent activity in one place.</p>
      </section>

      {/* Summary Cards */}
      {metrics && <SummaryCards metrics={metrics} />}

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BalanceTrendChart series={balanceSeries} />
        <CategorySpending categories={categorySpending} />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions transactions={recentTransactions} />
    </div>
  );
}
