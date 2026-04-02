export default function TwoFactorAuth() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">verified_user</span>
      </div>
      <h3 className="text-lg font-bold text-primary">Two-Factor Auth</h3>
      <p className="text-sm text-on-surface-variant mt-2 mb-6">Active and protecting your portfolio.</p>
      <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
        <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
        ACTIVE
      </div>
    </div>
  );
}
