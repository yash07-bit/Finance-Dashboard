import React from 'react'

const Insights = () => {
  const insights = [
    {
      title: 'Spending Habits',
      description: 'Your spending has decreased by 12% this month compared to last month',
      icon: 'trending_down',
      color: 'green'
    },
    {
      title: 'Savings Goal',
      description: 'You are on track to reach your $50,000 savings goal by Q1 2025',
      icon: 'savings',
      color: 'blue'
    },
    {
      title: 'Budget Alert',
      description: 'Your entertainment budget is at 85% capacity. Only $234 remaining',
      icon: 'warning',
      color: 'orange'
    }
  ]

  const spendingByCategory = [
    { category: 'Food & Dining', amount: '$2,450', percentage: 28 },
    { category: 'Shopping', amount: '$1,980', percentage: 22 },
    { category: 'Entertainment', amount: '$1,234', percentage: 14 },
    { category: 'Transportation', amount: '$987', percentage: 11 },
    { category: 'Other', amount: '$1,949', percentage: 25 }
  ]

  return (
    <main className="ml-64 pt-24 pb-12 px-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Insights</h1>
        <p className="text-gray-500">AI-powered financial insights and recommendations</p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        {insights.map((insight, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${
                insight.color === 'green' ? 'bg-green-100' :
                insight.color === 'blue' ? 'bg-blue-100' :
                'bg-orange-100'
              }`}>
                <span className={`material-symbols-outlined ${
                  insight.color === 'green' ? 'text-green-600' :
                  insight.color === 'blue' ? 'text-blue-600' :
                  'text-orange-600'
                }`}>{insight.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spending Analysis */}
      <div className="grid grid-cols-2 gap-8">
        {/* Chart */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6">Spending Trend</h3>
          <div className="h-80 bg-gradient-to-b from-blue-50 to-transparent rounded flex items-end justify-between px-4 py-4">
            {[65, 45, 72, 58, 85, 78].map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `${value * 2}px`}}></div>
                <span className="text-xs text-gray-500 mt-2">W{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6">Spending by Category</h3>
          <div className="space-y-6">
            {spendingByCategory.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.category}</span>
                  <span className="font-bold text-gray-900">{item.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style={{width: `${item.percentage}%`}}></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Personalized Recommendations</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: 'Optimize Subscriptions', desc: 'Cancel unused services to save $87/month' },
            { title: 'Round-up Savings', desc: 'Enable automatic savings from purchases' },
            { title: 'Increase Emergency Fund', desc: 'Build 6 months of expenses in reserve' }
          ].map((rec, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">{rec.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{rec.desc}</p>
              <button className="text-blue-700 font-medium text-sm hover:underline">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Insights
