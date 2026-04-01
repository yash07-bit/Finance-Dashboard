import React from 'react'

const Dashboard = () => {
  const stats = [
    {
      label: 'Total Balance',
      value: '$2,482,901.00',
      change: '+12.4% from last quarter',
      icon: 'trending_up',
      color: 'primary'
    },
    {
      label: 'Monthly Income',
      value: '$84,200.00',
      change: 'Next payout: Oct 24',
      icon: 'calendar_month',
      color: 'secondary'
    },
    {
      label: 'Total Expenses',
      value: '$12,450.20',
      change: '-4.2% optimized this month',
      icon: 'trending_down',
      color: 'error'
    }
  ]

  const portfolioData = [
    { month: 'Jan', value: 2100000 },
    { month: 'Feb', value: 2200000 },
    { month: 'Mar', value: 2350000 },
    { month: 'Apr', value: 2420000 },
    { month: 'May', value: 2480000 }
  ]

  const recentTransactions = [
    { id: 1, description: 'Amazon Purchase', amount: '-$234.50', date: 'Oct 15, 2024', category: 'Shopping' },
    { id: 2, description: 'Salary Deposit', amount: '+$8,450.00', date: 'Oct 15, 2024', category: 'Income' },
    { id: 3, description: 'Starbucks', amount: '-$5.80', date: 'Oct 14, 2024', category: 'Food' }
  ]

  return (
    <main className="ml-64 pt-24 pb-12 px-10">
      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">{stat.label}</p>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</h3>
            <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
              <span className="material-symbols-outlined text-sm">{stat.icon}</span>
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Portfolio Performance Chart */}
        <div className="col-span-8 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-xl font-bold">Portfolio Performance</h4>
              <p className="text-sm text-gray-500">Real-time asset valuation</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-700 text-white">1Y</button>
              <button className="px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100">5Y</button>
              <button className="px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100">MAX</button>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-b from-blue-50 to-transparent rounded flex items-end justify-between px-4 py-4">
            {portfolioData.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `${(data.value / 2500000) * 200}px`}}></div>
                <span className="text-xs text-gray-500 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="col-span-4 space-y-6">
          {/* Asset Allocation */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h5 className="font-bold text-lg mb-6">Asset Allocation</h5>
            <div className="space-y-4">
              {[
                { label: 'Stocks', value: 45, color: 'bg-blue-600' },
                { label: 'Bonds', value: 30, color: 'bg-green-600' },
                { label: 'Real Estate', value: 15, color: 'bg-purple-600' },
                { label: 'Cash', value: 10, color: 'bg-gray-400' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${item.color} h-full rounded-full`} style={{width: `${item.value}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <section className="mt-10 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <a href="/transactions" className="text-blue-700 font-medium text-sm hover:underline">View All</a>
        </div>
        <div className="space-y-4">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded transition-colors border-b last:border-b-0">
              <div>
                <p className="font-medium text-gray-900">{tx.description}</p>
                <p className="text-sm text-gray-500">{tx.date} • {tx.category}</p>
              </div>
              <span className={`font-bold ${tx.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{tx.amount}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dashboard
