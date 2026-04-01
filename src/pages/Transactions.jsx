import React, { useState } from 'react'

const Transactions = () => {
  const [filterType, setFilterType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const transactions = [
    { id: 1, description: 'Amazon Purchase', amount: '-$234.50', date: 'Oct 15, 2024', category: 'Shopping', type: 'expense', status: 'Completed' },
    { id: 2, description: 'Salary Deposit', amount: '+$8,450.00', date: 'Oct 15, 2024', category: 'Income', type: 'income', status: 'Completed' },
    { id: 3, description: 'Starbucks Coffee', amount: '-$5.80', date: 'Oct 14, 2024', category: 'Food', type: 'expense', status: 'Completed' },
    { id: 4, description: 'Netflix Subscription', amount: '-$15.99', date: 'Oct 12, 2024', category: 'Entertainment', type: 'expense', status: 'Completed' },
    { id: 5, description: 'Freelance Project Payment', amount: '+$2,500.00', date: 'Oct 10, 2024', category: 'Income', type: 'income', status: 'Completed' }
  ]

  const filteredTransactions = transactions.filter(tx => {
    if (filterType !== 'all' && tx.type !== filterType) return false
    if (searchTerm && !tx.description.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  return (
    <main className="ml-64 pt-24 pb-12 px-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Transactions</h1>
        <p className="text-gray-500">View and manage all your financial transactions</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="all">All Transactions</option>
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{tx.description}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{tx.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{tx.date}</td>
                <td className={`px-6 py-4 text-sm font-bold ${tx.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{tx.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{tx.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Transactions
