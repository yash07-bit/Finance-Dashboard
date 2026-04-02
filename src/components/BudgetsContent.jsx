import BudgetHeader from './BudgetHeader';
import BudgetSummaryCard from './BudgetSummaryCard';
import BudgetUtilization from './BudgetUtilization';
import CategoryBreakdown from './CategoryBreakdown';
import AddCategoryForm from './AddCategoryForm';
import BudgetInsights from './BudgetInsights';
import { getBudgetMetrics } from '../utils/financeData';

export default function BudgetsContent() {
  const budgetMetrics = getBudgetMetrics();
  const topCategory = [...budgetMetrics.categoryRows].sort((a, b) => b.spent - a.spent)[0];
  const targetUtilizationPct = 85;
  const variancePct = budgetMetrics.utilizationPct - targetUtilizationPct;

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <BudgetHeader />

        {/* Bento Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <BudgetSummaryCard
            totalBudget={budgetMetrics.totalBudget}
            totalSpent={budgetMetrics.totalSpent}
            remaining={budgetMetrics.remaining}
          />
          <BudgetUtilization utilizationPct={budgetMetrics.utilizationPct} variancePct={variancePct} />
        </div>

        {/* Category Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CategoryBreakdown rows={budgetMetrics.categoryRows} />
          <AddCategoryForm />
        </div>

        {/* Contextual Insights Section */}
        <BudgetInsights topCategory={topCategory} />
      </div>
    </div>
  );
}
