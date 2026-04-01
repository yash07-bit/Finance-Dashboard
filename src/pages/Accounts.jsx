import React from 'react'

const Accounts = () => {
  const accounts = [
    { id: 1, name: 'Main Checking', balance: '$24,580.00', type: 'Checking', last4: '4829', bank: 'Chase Bank' },
    { id: 2, name: 'Savings Account', balance: '$45,200.00', type: 'Savings', last4: '5294', bank: 'Chase Bank' },
    { id: 3, name: 'Investment Account', balance: '$128,450.00', type: 'Investment', last4: '3847', bank: 'Fidelity' }
  ]

  return (
    <main className="ml-64 pt-24 pb-12 px-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Accounts</h1>
          <p className="text-gray-500">Manage all your linked bank accounts and wallets</p>
        </div>
        <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
          + Link Account
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Total Assets</p>
          <p className="text-3xl font-bold text-gray-900">$198,230.00</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Linked Accounts</p>
          <p className="text-3xl font-bold text-gray-900">{accounts.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Last Updated</p>
          <p className="text-3xl font-bold text-gray-900">Just now</p>
        </div>
      </div>

      {/* Accounts List */}
      <div className="space-y-6">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-700">account_balance</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{account.name}</h3>
                    <p className="text-sm text-gray-500">{account.bank} • {account.type}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-900 mb-1">{account.balance}</p>
                <p className="text-sm text-gray-500">•••• {account.last4}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 font-medium text-sm transition-colors">
                View Details
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 font-medium text-sm transition-colors">
                Transfer
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 font-medium">
                <span className="material-symbols-outlined text-sm">more_vert</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Account Actions</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: 'compare_arrows', title: 'Transfer Money', desc: 'Move funds between accounts' },
            { icon: 'add_circle', title: 'Add Account', desc: 'Link a new bank account' },
            { icon: 'download', title: 'Export Statements', desc: 'Download account statements' }
          ].map((action, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-3xl text-blue-700 mb-3 block">{action.icon}</span>
              <h4 className="font-bold text-gray-900 mb-1">{action.title}</h4>
              <p className="text-sm text-gray-500">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Accounts
