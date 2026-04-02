import { useState } from 'react';

export default function TwoFactorAuth() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">verified_user</span>
      </div>
      <h3 className="text-lg font-bold text-primary">Two-Factor Auth</h3>
      <p className="text-sm text-on-surface-variant mt-2 mb-6">{isActive ? 'Active and protecting your portfolio.' : 'Turn on 2FA to secure your account.'}</p>
      <button
        type="button"
        onClick={() => setIsActive((current) => !current)}
        className={`flex items-center gap-2 font-bold text-sm ${isActive ? 'text-emerald-600' : 'text-slate-500'}`}
      >
        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-600 animate-pulse' : 'bg-slate-400'}`}></span>
        {isActive ? 'ACTIVE' : 'INACTIVE'}
      </button>
    </div>
  );
}
