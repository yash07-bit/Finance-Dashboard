import React, { useState } from 'react'

const Budgets = () => {
  const [budgets] = useState([
    { id: 1, name: 'Food & Dining', limit: '$500', spent: '$423', percentage: 85, color: 'orange' },
    { id: 2, name: 'Entertainment', limit: '$300', spent: '$234', percentage: 78, color: 'purple' },
    { id: 3, name: 'Shopping', limit: '$400', spent: '$187', percentage: 47, color: 'pink' },
    { id: 4, name: 'Transportation', limit: '$200', spent: '$156', percentage: 78, color: 'blue' }
  ])

  return (
    <main className="ml-64 pt-24 pb-12 px-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Budgets</h1>
          <p className="text-gray-500">Set and manage spending budgets across categories</p>
        </div>
        <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
          + Create Budget
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Total Budgeted</p>
          <p className="text-3xl font-bold text-gray-900">$1,400.00</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Total Spent</p>
          <p className="text-3xl font-bold text-gray-900">$1,000.00</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Remaining</p>
          <p className="text-3xl font-bold text-green-600">$400.00</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Overall Usage</p>
          <p className="text-3xl font-bold text-gray-900">71%</p>
        </div>
      </div>

      {/* Budget Items */}
      <div className="space-y-6">
        {budgets.map((budget) => (
          <div key={budget.id} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{budget.name}</h3>
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Limit</p>
                    <p className="text-lg font-bold text-gray-900">{budget.limit}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Spent</p>
                    <p className="text-lg font-bold text-gray-900">{budget.spent}</p>
                  </div>
                </div>
              </div>
              <button className="material-symbols-outlined text-gray-400 hover:text-gray-600">more_vert</button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-900">Progress</span>
                <span className="font-bold text-gray-900">{budget.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-full rounded-full ${
                    budget.percentage > 80 ? 'bg-red-500' :
                    budget.percentage > 60 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{width: `${budget.percentage}%`}}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State Placeholder */}
      {budgets.length === 0 && (
        <div className="bg-white rounded-lg p-16 shadow-sm border border-gray-100 text-center">
          <span className="material-symbols-outlined text-6xl text-gray-300 block mb-4">folder_open</span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No budgets yet</h3>
          <p className="text-gray-500 mb-6">Create your first budget to start tracking spending</p>
          <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
            Create Budget
          </button>
        </div>
      )}
    </main>
  )
}

export default Budgets
