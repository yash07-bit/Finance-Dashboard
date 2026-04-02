export default function AppPreferences() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <h3 className="text-lg font-bold text-primary mb-6">App Preferences</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400">contrast</span>
            <span className="text-sm font-semibold">Appearance</span>
          </div>
          <div className="flex bg-surface-container-low p-1 rounded-lg">
            <button className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-bold text-primary">
              Light
            </button>
            <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
              Dark
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-outline">Default Currency</label>
          <select className="w-full bg-surface-container-low border-none rounded-xl text-sm font-semibold py-2.5 focus:ring-2 focus:ring-primary/10">
            <option value="USD">USD - US Dollar ($)</option>
            <option value="EUR">EUR - Euro (€)</option>
            <option value="GBP">GBP - British Pound (£)</option>
          </select>
        </div>
        <div className="pt-4 space-y-4 border-t border-surface-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">mail</span>
              <span className="text-sm font-semibold">Email Alerts</span>
            </div>
            <input type="checkbox" className="rounded text-primary focus:ring-primary w-5 h-5" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">notifications_active</span>
              <span className="text-sm font-semibold">Push Notifications</span>
            </div>
            <input type="checkbox" className="rounded text-primary focus:ring-primary w-5 h-5" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
