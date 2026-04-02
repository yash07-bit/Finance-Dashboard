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
