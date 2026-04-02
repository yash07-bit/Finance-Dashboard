import { useMemo } from 'react';
import { getCategorySpending, getBudgetMetrics } from '../utils/financeData';
import { getTransactions } from '../utils/financeData';

const CATEGORY_GROUPS = {
  'Equities': ['stocks', 'investments', 'trading'],
  'Fixed Income': ['bonds', 'fixed income', 'debt'],
  'Cash/Stable': ['savings', 'cash'],
};

const categoryColors = {
  'Equities': 'bg-primary',
  'Fixed Income': 'bg-blue-400',
  'Cash/Stable': 'bg-blue-200',
};

export default function AllocationMix() {
  const transactions = getTransactions();
  const categorySpending = getCategorySpending(transactions);
  const budgetMetrics = getBudgetMetrics(transactions);

  const { allocations, portfolioHealth } = useMemo(() => {
    // Calculate total spending
    const total = categorySpending.reduce((sum, cat) => sum + cat.amount, 0);

    // Map categories to allocation groups
    const groupedAllocations = {};
    Object.entries(CATEGORY_GROUPS).forEach(([group]) => {
      groupedAllocations[group] = 0;
    });

    // Distribute spending across groups (use category names to classify)
    categorySpending.forEach((cat) => {
      const categoryName = cat.name.toLowerCase();
      let assigned = false;

      for (const [group, keywords] of Object.entries(CATEGORY_GROUPS)) {
        if (keywords.some((keyword) => categoryName.includes(keyword))) {
          groupedAllocations[group] += cat.amount;
          assigned = true;
          break;
        }
      }

      // Default classification based on category name patterns
      if (!assigned) {
        if (
          categoryName.includes('invest') ||
          categoryName.includes('stock') ||
          categoryName.includes('market')
        ) {
          groupedAllocations['Equities'] += cat.amount;
        } else if (
          categoryName.includes('bond') ||
          categoryName.includes('income') ||
          categoryName.includes('debt')
        ) {
          groupedAllocations['Fixed Income'] += cat.amount;
        } else {
          groupedAllocations['Cash/Stable'] += cat.amount;
        }
      }
    });

    // Convert to allocations array with percentages
    const allocs = Object.entries(groupedAllocations)
      .map(([label, amount]) => ({
        label,
        percentage: total ? Math.round((amount / total) * 100) : 0,
        color: categoryColors[label],
      }))
      .sort((a, b) => b.percentage - a.percentage);

    // Determine portfolio health based on budget utilization
    const utilizationPct = budgetMetrics.utilizationPct;
    let health = 'Optimal';
    let healthColor = 'text-emerald-600';

    if (utilizationPct > 100) {
      health = 'At Risk';
      healthColor = 'text-red-600';
    } else if (utilizationPct > 90) {
      health = 'Warning';
      healthColor = 'text-amber-600';
    } else if (utilizationPct > 70) {
      health = 'Good';
      healthColor = 'text-blue-600';
    }

    return {
      allocations: allocs,
      portfolioHealth: {
        status: health,
        color: healthColor,
        utilization: utilizationPct,
      },
    };
  }, [categorySpending, budgetMetrics]);

  return (
    <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/18 rounded-br-[4rem] -ml-10 -mt-10 transition-transform group-hover:scale-110 shadow-inner"></div>
      <h3 className="font-bold font-headline mb-6">Allocation Mix</h3>
      <div className="space-y-6">
        {allocations.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <span className="text-sm font-bold">{item.percentage}%</span>
          </div>
        ))}

        <div className="pt-6 border-t border-outline-variant/10">
          <div className="bg-surface-container-low rounded-lg p-4">
            <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">
              Portfolio Health
            </p>
            <div className="flex items-center justify-between">
              <p className={`text-lg font-bold ${portfolioHealth.color}`}>
                {portfolioHealth.status}
              </p>
              <p className="text-xs text-on-surface-variant">
                {portfolioHealth.utilization}% utilized
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
