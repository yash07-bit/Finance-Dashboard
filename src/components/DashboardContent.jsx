import SummaryCards from './SummaryCards';
import BalanceTrendChart from './BalanceTrendChart';
import CategorySpending from './CategorySpending';
import RecentTransactions from './RecentTransactions';
import {
  getCategorySpending,
  getDashboardMetrics,
  getRecentTransactions,
  mockTransactions,
  monthlyBalanceSeries,
} from '../utils/mockData';

export default function DashboardContent() {
  const metrics = getDashboardMetrics(mockTransactions, monthlyBalanceSeries);
  const categorySpending = getCategorySpending(mockTransactions);
  const recentTransactions = getRecentTransactions(mockTransactions, 5);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Hero Editorial Header */}
      <section className="space-y-2">
        <p className="text-text-muted font-semibold tracking-wide uppercase text-xs">Financial Overview</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Dashboard</h1>
        <p className="text-text-muted text-sm leading-relaxed">Track your wealth growth, spending patterns, and recent activity in one place.</p>
      </section>

      {/* Summary Cards */}
      <SummaryCards metrics={metrics} />

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BalanceTrendChart series={monthlyBalanceSeries} />
        <CategorySpending categories={categorySpending} />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions transactions={recentTransactions} />
    </div>
  );
}
