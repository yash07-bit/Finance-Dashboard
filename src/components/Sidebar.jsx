import { Link, useLocation } from 'react-router-dom';
import ExcelUpload from './ExcelUpload';
import { useAppData } from '../context/useAppData';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { role, canEdit, toggleRole } = useAppData();

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
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`h-screen w-64 fixed left-0 top-0 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col p-5 z-50 border-r border-primary-accent/15 shadow-lg transition-transform duration-300 md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
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
            onClick={() => setSidebarOpen(false)}
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

      <div className="mb-4">
        <ExcelUpload variant="sidebar" />
      </div>

      <div className="border-t border-primary-accent/10 pt-4 mt-auto">
        <Link
          to="/settings"
          onClick={() => setSidebarOpen(false)}
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

      <div className="mt-6 pt-6 border-t border-primary-accent/10 space-y-3">
        <button
          type="button"
          onClick={toggleRole}
          className={`w-full flex items-center justify-between gap-3 px-3 py-3 rounded-xl border transition-colors ${
            canEdit
              ? 'bg-emerald-500/10 border-emerald-400/20 text-white hover:bg-emerald-500/15'
              : 'bg-slate-500/10 border-slate-400/20 text-slate-100 hover:bg-slate-500/15'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${canEdit ? 'bg-emerald-400/20' : 'bg-slate-400/20'}`}>
              <span className="material-symbols-outlined text-white">{canEdit ? 'admin_panel_settings' : 'visibility'}</span>
            </div>
            <div className="min-w-0 text-left">
              <p className="text-xs font-semibold text-white truncate">{role === 'admin' ? 'Admin Mode' : 'Viewer Mode'}</p>
              <p className="text-[11px] text-slate-300 truncate">
                {canEdit ? 'Can add, edit, import, and delete' : 'Read-only access'}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">
            Toggle
          </span>
        </button>

        <Link to="/settings" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-2 rounded-xl py-2 hover:bg-primary-accent/10 transition-colors">
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
    </>
  );
}
