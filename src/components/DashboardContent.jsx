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
import { useMemo } from 'react';

export default function DashboardContent() {
  const { data } = useAppData();
  const transactions = data.transactions;
  // Pass transactions to calculate dynamic balance series
  const balanceSeries = useMemo(() => getBalanceSeries(transactions), [transactions]);
  const metrics = useMemo(() => getDashboardMetrics(transactions, balanceSeries), [transactions, balanceSeries]);
  const categorySpending = useMemo(() => getCategorySpending(transactions), [transactions]);
  const recentTransactions = useMemo(() => getRecentTransactions(transactions, 5), [transactions]);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Hero Editorial Header */}
      <section className="space-y-2">
        <p className="text-text-muted font-semibold tracking-wide uppercase text-xs">Financial Overview</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">Dashboard</h1>
        <p className="text-text-muted text-sm leading-relaxed">Track your wealth growth, spending patterns, and recent activity in one place.</p>
      </section>

      {/* Summary Cards */}
      <SummaryCards metrics={metrics} />

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        <BalanceTrendChart series={balanceSeries} />
        <CategorySpending categories={categorySpending} />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions transactions={recentTransactions} />
    </div>
  );
}
