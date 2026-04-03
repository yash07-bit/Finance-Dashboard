import { useMemo, useState, useEffect } from 'react';
import BudgetHeader from './BudgetHeader';
import BudgetSummaryCard from './BudgetSummaryCard';
import BudgetUtilization from './BudgetUtilization';
import CategoryBreakdown from './CategoryBreakdown';
import AddCategoryForm from './AddCategoryForm';
import { formatCurrency, getBudgetMetrics } from '../utils/financeData';
import { useAppData } from '../context/useAppData';

export default function BudgetsContent() {
  const { data, addBudget } = useAppData();
  const transactions = data.transactions;
  const [budgetLimits, setBudgetLimits] = useState({});

  const baseMetrics = useMemo(() => getBudgetMetrics(transactions), [transactions]);

  // Update budget limits when transactions change
  useEffect(() => {
    const limits = {};
    baseMetrics.categoryRows.forEach((row) => {
      limits[row.name] = row.limit;
    });
    setBudgetLimits(limits);
  }, [baseMetrics]);

  const budgetMetrics = useMemo(
    () => getBudgetMetrics(transactions, budgetLimits),
    [transactions, budgetLimits],
  );
  const [actionNote, setActionNote] = useState('');

  const handleCreateCategory = ({ name, limit }) => {
    if (!name || !Number.isFinite(limit) || limit <= 0) return;

    // Add to context
    addBudget({
      name,
      limit,
      month: new Date().toLocaleString('default', { month: 'long' }),
      threshold: 85,
    });

    // Also update local state
    setBudgetLimits((current) => ({
      ...current,
      [name]: limit,
    }));
  };

  const forecast = useMemo(() => {
    const now = new Date();
    const currentDay = Math.max(1, now.getDate());
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const projectedSpent = (budgetMetrics.totalSpent / currentDay) * daysInMonth;
    const projectedUtilization = budgetMetrics.totalBudget
      ? Math.round((projectedSpent / budgetMetrics.totalBudget) * 100)
      : 0;

    return {
      projectedSpent,
      projectedUtilization,
      varianceToBudget: projectedSpent - budgetMetrics.totalBudget,
    };
  }, [budgetMetrics.totalSpent, budgetMetrics.totalBudget]);

  const handleSmartRebalance = () => {
    const receiver = [...budgetMetrics.categoryRows]
      .sort((a, b) => b.percentage - a.percentage)
      .find((row) => row.status === 'over' || row.status === 'at' || row.status === 'near') || budgetMetrics.categoryRows[0];

    const donor = [...budgetMetrics.categoryRows]
      .sort((a, b) => a.percentage - b.percentage)
      .find((row) => row.name !== receiver?.name && row.percentage < 70 && row.limit > 500);

    if (!receiver || !donor) {
      setActionNote('No rebalance needed right now. Allocation mix is already healthy.');
      return;
    }

    const transferAmount = Math.max(250, Math.round(donor.limit * 0.08));
    if (donor.limit - transferAmount < 200) {
      setActionNote('Rebalance skipped to avoid setting a category limit too low.');
      return;
    }

    setBudgetLimits((current) => ({
      ...current,
      [receiver.name]: (current[receiver.name] || receiver.limit) + transferAmount,
      [donor.name]: (current[donor.name] || donor.limit) - transferAmount,
    }));

    setActionNote(
      `Moved ${formatCurrency(transferAmount)} from ${donor.name} to ${receiver.name}.`,
    );
  };

  const handleExportBudgetCsv = () => {
    const header = 'Category,Spent,Limit,Utilization\n';
    const rows = budgetMetrics.categoryRows
      .map((row) => `${row.name},${row.spent},${row.limit},${row.percentage}%`)
      .join('\n');
    const blob = new Blob([`${header}${rows}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'budget-summary.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const targetUtilizationPct = 85;
  const variancePct = budgetMetrics.utilizationPct - targetUtilizationPct;

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <BudgetHeader
          initialLimits={budgetLimits}
          onAllocationsUpdated={setBudgetLimits}
        />

        {/* Bento Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <BudgetSummaryCard
            totalBudget={budgetMetrics.totalBudget}
            totalSpent={budgetMetrics.totalSpent}
            remaining={budgetMetrics.remaining}
          />
          <BudgetUtilization utilizationPct={budgetMetrics.utilizationPct} variancePct={variancePct} />
        </div>

        {/* Category Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <CategoryBreakdown rows={budgetMetrics.categoryRows} />
          <AddCategoryForm
            onCreateCategory={handleCreateCategory}
            forecast={forecast}
            actionNote={actionNote}
            onSmartRebalance={handleSmartRebalance}
            onExportBudgetCsv={handleExportBudgetCsv}
          />
        </div>

      </div>
    </div>
  );
}
