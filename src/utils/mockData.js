import { getPreferredCurrency } from '../context/currencyPreferenceStore'

const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
}

export const monthlyBalanceSeries = [
  { month: 'Jan', balance: 962000 },
  { month: 'Feb', balance: 998500 },
  { month: 'Mar', balance: 1012400 },
  { month: 'Apr', balance: 1089400 },
  { month: 'May', balance: 1167500 },
  { month: 'Jun', balance: 1248500 },
]

export const mockTransactions = [
  { id: 1, date: '2026-04-01', description: 'Client Retainer', category: 'Income', icon: 'payments', amount: 18400, type: 'income' },
  { id: 2, date: '2026-03-31', description: 'AWS Infrastructure', category: 'Technology', icon: 'cloud', amount: 2450, type: 'expense' },
  { id: 3, date: '2026-03-30', description: 'Office Lease', category: 'Housing', icon: 'home', amount: 15000, type: 'expense' },
  { id: 4, date: '2026-03-29', description: 'ETF Dividend', category: 'Investment', icon: 'account_balance', amount: 9200, type: 'income' },
  { id: 5, date: '2026-03-28', description: 'Team Dinner', category: 'Food & Dining', icon: 'restaurant', amount: 1180, type: 'expense' },
  { id: 6, date: '2026-03-27', description: 'Ad Campaign', category: 'Marketing', icon: 'campaign', amount: 3800, type: 'expense' },
  { id: 7, date: '2026-03-25', description: 'Commuter Fuel', category: 'Transport', icon: 'directions_car', amount: 610, type: 'expense' },
  { id: 8, date: '2026-03-24', description: 'Freelance Designer', category: 'Operations', icon: 'work', amount: 2100, type: 'expense' },
  { id: 9, date: '2026-03-22', description: 'Market Yield', category: 'Investment', icon: 'trending_up', amount: 3400, type: 'income' },
]

export const budgetLimits = {
  'Food & Dining': 6000,
  Housing: 15000,
  Entertainment: 2500,
  Transport: 4500,
  Technology: 5000,
  Marketing: 4000,
  Operations: 3000,
}

export const accounts = [
  { id: 1, name: 'JP Morgan Private', balance: 842000, type: 'banking', last4: '1742' },
  { id: 2, name: 'Ledger Vault', balance: 312000, type: 'digital', last4: '9234' },
  { id: 3, name: 'Metal Reserve', balance: 94500, type: 'physical', last4: '0011' },
]

export const formatCurrency = (value, currency = getPreferredCurrency()) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value * (CURRENCY_RATES[currency] ?? 1))

export const formatShortDate = (isoDate) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(isoDate))

export function getDashboardMetrics(transactions = mockTransactions, balances = monthlyBalanceSeries) {
  const income = transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const expenses = transactions.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
  const totalBalance = balances.at(-1)?.balance ?? 0
  const previousBalance = balances.at(-2)?.balance ?? totalBalance
  const balanceChangePct = previousBalance ? ((totalBalance - previousBalance) / previousBalance) * 100 : 0

  return {
    totalBalance,
    monthlyIncome: income,
    monthlyExpenses: expenses,
    balanceChangePct,
  }
}

export function getCategorySpending(transactions = mockTransactions) {
  const expenses = transactions.filter((t) => t.type === 'expense')
  const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0)

  const grouped = expenses.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount
    return acc
  }, {})

  return Object.entries(grouped)
    .map(([name, amount]) => ({
      name,
      amount,
      percentage: totalExpenses ? Math.round((amount / totalExpenses) * 100) : 0,
    }))
    .sort((a, b) => b.amount - a.amount)
}

export function getRecentTransactions(transactions = mockTransactions, limit = 6) {
  return [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export function getBudgetMetrics(transactions = mockTransactions, limits = budgetLimits) {
  const expenses = transactions.filter((t) => t.type === 'expense')

  const categoryRows = Object.entries(limits).map(([name, limit]) => {
    const spent = expenses
      .filter((t) => t.category === name)
      .reduce((sum, t) => sum + t.amount, 0)
    const percentage = limit ? Math.min(100, Math.round((spent / limit) * 100)) : 0
    const status = spent > limit ? 'over' : spent >= limit ? 'at' : spent >= limit * 0.9 ? 'near' : 'normal'

    let statusLabel = 'On Track'
    if (spent > limit) statusLabel = `Excess of ${formatCurrency(spent - limit)}`
    else if (spent >= limit) statusLabel = 'At Limit'
    else if (spent >= limit * 0.9) statusLabel = 'Near Limit'

    return {
      name,
      spent,
      limit,
      percentage,
      status,
      statusLabel,
    }
  })

  const totalBudget = Object.values(limits).reduce((a, b) => a + b, 0)
  const totalSpent = categoryRows.reduce((sum, row) => sum + row.spent, 0)
  const remaining = Math.max(totalBudget - totalSpent, 0)
  const utilizationPct = totalBudget ? Math.round((totalSpent / totalBudget) * 100) : 0

  return {
    totalBudget,
    totalSpent,
    remaining,
    utilizationPct,
    categoryRows,
  }
}

export function getReportMetrics(transactions = mockTransactions, balances = monthlyBalanceSeries) {
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
