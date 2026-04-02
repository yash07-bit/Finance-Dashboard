import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: 'dashboard' },
    { name: 'Transactions', href: '/transactions', icon: 'receipt_long' },
    { name: 'Insights', href: '/insights', icon: 'insights' },
    { name: 'Budgets', href: '/budgets', icon: 'account_balance_wallet' },
    { name: 'Reports', href: '/reports', icon: 'assessment' },
    { name: 'Accounts', href: '/accounts', icon: 'account_balance' },
  ];

  const isActive = (href) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col p-5 z-50 border-r border-primary-accent/15 shadow-lg">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-primary-accent flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'wght' 600" }}>
              shield_lock
            </span>
          </div>
          <h1 className="text-lg font-bold tracking-tight text-white">NexaVault</h1>
        </div>
        <p className="text-xs text-slate-400 font-medium">Wealth Management</p>
      </div>

      <nav className="flex flex-col gap-1.5 flex-grow">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm ${
              isActive(item.href)
                ? 'bg-primary-accent/20 text-white border border-primary-accent/40 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-primary-accent/10'
            }`}
          >
            <span className="material-symbols-outlined text-lg leading-none">{item.icon}</span>
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-primary-accent/10 pt-4 mt-auto">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm ${
            isActive('/settings')
              ? 'bg-primary-accent/20 text-white border border-primary-accent/40 shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-primary-accent/10'
          }`}
        >
          <span className="material-symbols-outlined text-lg leading-none">settings</span>
          <span className="truncate">Settings</span>
        </Link>
      </div>

      <div className="mt-6 pt-6 border-t border-primary-accent/10">
        <Link to="/settings" className="flex items-center gap-3 px-2 rounded-xl py-2 hover:bg-primary-accent/10 transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-accent">account_circle</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-white truncate">Alexander Pierce</p>
            <p className="text-xs text-slate-400 truncate">Verified Member</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
