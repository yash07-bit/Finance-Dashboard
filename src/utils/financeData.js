import {
  accounts as sampleAccounts,
  budgetLimits as sampleBudgetLimits,
  monthlyBalanceSeries as sampleMonthlyBalanceSeries,
  mockTransactions as sampleTransactions,
} from '../data/sampleFinanceData';

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);

export const formatShortDate = (isoDate) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(isoDate));

export function getTransactions(transactions = sampleTransactions) {
  return [...transactions];
}

export function getBalanceSeries(series = sampleMonthlyBalanceSeries) {
  return [...series];
}

export function getAccounts(accounts = sampleAccounts) {
  return [...accounts];
}

export function getDashboardMetrics(transactions = sampleTransactions, balances = sampleMonthlyBalanceSeries) {
  const income = transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const totalBalance = balances.at(-1)?.balance ?? 0;
  const previousBalance = balances.at(-2)?.balance ?? totalBalance;
  const balanceChangePct = previousBalance ? ((totalBalance - previousBalance) / previousBalance) * 100 : 0;

  return {
    totalBalance,
    monthlyIncome: income,
    monthlyExpenses: expenses,
    balanceChangePct,
  };
}

export function getCategorySpending(transactions = sampleTransactions) {
  const expenses = transactions.filter((t) => t.type === 'expense');
  const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);

  const grouped = expenses.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([name, amount]) => ({
      name,
      amount,
      percentage: totalExpenses ? Math.round((amount / totalExpenses) * 100) : 0,
    }))
    .sort((a, b) => b.amount - a.amount);
}

export function getRecentTransactions(transactions = sampleTransactions, limit = 6) {
  return [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function getBudgetMetrics(transactions = sampleTransactions, limits = sampleBudgetLimits) {
  const expenses = transactions.filter((t) => t.type === 'expense');

  const categoryRows = Object.entries(limits).map(([name, limit]) => {
    const spent = expenses
      .filter((t) => t.category === name)
      .reduce((sum, t) => sum + t.amount, 0);
    const percentage = limit ? Math.min(100, Math.round((spent / limit) * 100)) : 0;
    const status = spent > limit ? 'over' : spent >= limit ? 'at' : spent >= limit * 0.9 ? 'near' : 'normal';

    let statusLabel = 'On Track';
    if (spent > limit) statusLabel = `Excess of ${formatCurrency(spent - limit)}`;
    else if (spent >= limit) statusLabel = 'At Limit';
    else if (spent >= limit * 0.9) statusLabel = 'Near Limit';

    return {
      name,
      spent,
      limit,
      percentage,
      status,
      statusLabel,
    };
  });

  const totalBudget = Object.values(limits).reduce((a, b) => a + b, 0);
  const totalSpent = categoryRows.reduce((sum, row) => sum + row.spent, 0);
  const remaining = Math.max(totalBudget - totalSpent, 0);
  const utilizationPct = totalBudget ? Math.round((totalSpent / totalBudget) * 100) : 0;

  return {
    totalBudget,
    totalSpent,
    remaining,
    utilizationPct,
    categoryRows,
  };
}

export function getReportMetrics(transactions = sampleTransactions, balances = sampleMonthlyBalanceSeries) {
  const first = balances[0]?.balance ?? 0;
  const last = balances.at(-1)?.balance ?? 0;
  const velocityPct = first ? ((last - first) / first) * 100 : 0;

  const monthlyMovement = balances.map((item, index) => {
    const previous = balances[index - 1]?.balance ?? item.balance;
    const delta = item.balance - previous;
    const revenue = Math.max(0, delta);
    const burn = Math.max(0, -delta) + 12000;
    return {
      month: item.month.toUpperCase(),
      revenue,
      burn,
    };
  });

  const categoryDistribution = getCategorySpending(transactions).slice(0, 4).map((row) => ({
    name: row.name,
    percentage: row.percentage,
  }));

  return {
    portfolioValue: last,
    velocityPct,
    monthlyMovement,
    categoryDistribution,
  };
}

const WEEKDAY_ORDER = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getWeeklyVolumeAnalysis(transactions = sampleTransactions) {
  const dailyTotals = WEEKDAY_ORDER.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});

  transactions.forEach((transaction) => {
    const weekday = WEEKDAY_ORDER[new Date(transaction.date).getDay()];
    dailyTotals[weekday] += transaction.amount;
  });

  const dayRows = WEEKDAY_ORDER.map((day) => ({
    day: day.slice(0, 3).toUpperCase(),
    amount: dailyTotals[day],
  }));

  const totalVolume = dayRows.reduce((sum, row) => sum + row.amount, 0);
  const avgDaily = totalVolume / WEEKDAY_ORDER.length;
  const peakVolume = Math.max(...dayRows.map((row) => row.amount));

  return {
    days: dayRows.map((row) => ({
      ...row,
      height: peakVolume ? `${Math.max(18, Math.round((row.amount / peakVolume) * 100))}%` : '18%',
      isHighlight: row.amount === peakVolume,
    })),
    avgDaily,
    peakVolume,
  };
}

export function getMarketSignals(transactions = sampleTransactions, balances = sampleMonthlyBalanceSeries, limits = sampleBudgetLimits) {
  const firstBalance = balances[0]?.balance ?? 0;
  const latestBalance = balances.at(-1)?.balance ?? 0;
  const balanceGrowthPct = firstBalance ? ((latestBalance - firstBalance) / firstBalance) * 100 : 0;

  const income = transactions.filter((transaction) => transaction.type === 'income').reduce((sum, transaction) => sum + transaction.amount, 0);
  const expenses = transactions.filter((transaction) => transaction.type === 'expense').reduce((sum, transaction) => sum + transaction.amount, 0);
  const cashFlowRatio = expenses ? income / expenses : 0;

  const categorySpending = getCategorySpending(transactions);
  const topCategoryShare = categorySpending[0]?.percentage ?? 0;

  const totalBudget = Object.values(limits).reduce((sum, limit) => sum + limit, 0);
  const budgetUtilization = totalBudget
    ? Math.round((expenses / totalBudget) * 100)
    : 0;

  return [
    {
      label: 'Balance Growth',
      value: `${balanceGrowthPct >= 0 ? '+' : ''}${balanceGrowthPct.toFixed(1)}%`,
      change: `${formatCurrency(latestBalance)} now`,
      changeColor: balanceGrowthPct >= 0 ? 'text-emerald-600' : 'text-error',
    },
    {
      label: 'Cash Flow Ratio',
      value: `${cashFlowRatio.toFixed(2)}x`,
      change: cashFlowRatio >= 1 ? 'Strong inflow' : 'Needs attention',
      changeColor: cashFlowRatio >= 1 ? 'text-emerald-600' : 'text-error',
    },
    {
      label: 'Top Category',
      value: `${topCategoryShare}%`,
      change: categorySpending[0]?.name ?? 'No spend',
      changeColor: 'text-on-surface-variant/40',
    },
    {
      label: 'Budget Utilization',
      value: `${budgetUtilization}%`,
      change: 'Across tracked categories',
      changeColor: budgetUtilization <= 100 ? 'text-emerald-600' : 'text-error',
    },
  ];
}
