export const mockTransactions = [
  { id: 1, description: 'Salary Deposit', amount: 5000, date: 'Today', type: 'income' },
  { id: 2, description: 'Amazon Purchase', amount: 89.99, date: 'Yesterday', type: 'expense' },
  { id: 3, description: 'Grocery Store', amount: 45.5, date: '2 days ago', type: 'expense' },
  { id: 4, description: 'Freelance Payment', amount: 1200, date: '3 days ago', type: 'income' },
  { id: 5, description: 'Netflix Subscription', amount: 15.99, date: '5 days ago', type: 'expense' },
  { id: 6, description: 'Gas Station', amount: 52.3, date: '6 days ago', type: 'expense' },
  { id: 7, description: 'Restaurant', amount: 65.49, date: '1 week ago', type: 'expense' },
  { id: 8, description: 'Investment Return', amount: 250, date: '1 week ago', type: 'income' },
]

export const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3200 },
  { name: 'Aug', value: 2780 },
]

export const analyticsData = {
  totalIncome: 12500,
  totalExpenses: 8250,
  savingsGoal: 85,
  investments: 5200,
  monthlyChange: 12,
  expenseChange: 8,
  netWorth: 48200,
  emergencyFund: 12000,
}

export const accounts = [
  { id: 1, name: 'Checking Account', balance: 12500.50, type: 'checking', last4: '4829' },
  { id: 2, name: 'Savings Account', balance: 8250.00, type: 'savings', last4: '5294' },
  { id: 3, name: 'Investment Account', balance: 5200.00, type: 'investment', last4: '3847' },
]

export const cards = [
  { id: 1, name: 'Visa Credit Card', balance: 2150.00, limit: 5000, last4: '4829', expires: '12/26' },
  { id: 2, name: 'Mastercard', balance: 0, limit: 3000, last4: '5294', expires: '08/25' },
]
