import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MainLayout({ children }) {
  const location = useLocation()

  const navItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/' },
    { label: 'Transactions', icon: 'receipt_long', path: '/transactions' },
    { label: 'Insights', icon: 'trending_up', path: '/insights' },
    { label: 'Budgets', icon: 'account_balance_wallet', path: '/budgets' },
    { label: 'Accounts', icon: 'account_balance', path: '/accounts' },
    { label: 'Reports', icon: 'description', path: '/reports' },
    { label: 'Settings', icon: 'settings', path: '/settings' }
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-200 shadow-sm">
        {/* Logo */}
        <div className="px-8 py-8 border-b border-gray-200">
          <h1 className="text-2xl font-extrabold text-blue-700">Wealth</h1>
          <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1">Quiet Authority</p>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium text-sm ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Alex Chen</p>
              <p className="text-xs text-gray-500 truncate">alex.chen@example.com</p>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-lg">more_vert</span>
          </div>
        </div>
      </aside>

      {/* Top Bar */}
      <header className="fixed top-0 right-0 left-64 h-24 bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-95 z-40">
        <div className="flex items-center justify-between h-full px-10">
          <h2 className="text-2xl font-extrabold text-gray-900">Wealth Management Dashboard</h2>
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-gray-600">notifications</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-gray-600">help</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold cursor-pointer">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
