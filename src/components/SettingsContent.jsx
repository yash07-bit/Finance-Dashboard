import { useMemo, useState } from 'react';
import SettingsPageHeader from './SettingsPageHeader';
import ProfileSection from './ProfileSection';
import AppPreferences from './AppPreferences';
import SecurityStatus from './SecurityStatus';
import TwoFactorAuth from './TwoFactorAuth';
import PasswordProtocol from './PasswordProtocol';
import SecurityEvents from './SecurityEvents';

export default function SettingsContent() {
  const [activePolicy, setActivePolicy] = useState(null);

  const policySections = useMemo(
    () => ({
      privacy: {
        title: 'Privacy Policy',
        icon: 'lock',
        lines: [
          'We only use your data to power dashboards, reports, and account controls in this workspace.',
          'Exported files are generated locally and are not shared with third-party services.',
          'You can change currency, alerts, and security preferences at any time from this settings page.',
        ],
      },
      terms: {
        title: 'Terms of Service',
        icon: 'description',
        lines: [
          'Use the platform for internal finance and portfolio operations only.',
          'Review generated reports before relying on them for external filing or compliance submission.',
          'Keep your account credentials private and secure access to connected accounts.',
        ],
      },
      compliance: {
        title: 'Compliance Docs',
        icon: 'verified_user',
        lines: [
          'Audit logs, export history, and security events are tracked for review.',
          'Password, 2FA, and account access changes should be validated by authorized users.',
          'For policy questions, use the security controls and audit trail shown in this workspace.',
        ],
      },
    }),
    [],
  );

  const currentPolicy = activePolicy ? policySections[activePolicy] : null;

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-12">
      <SettingsPageHeader />
      
      {/* Settings Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Profile Section */}
        <ProfileSection />
        
        {/* Preferences Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <AppPreferences />
          <SecurityStatus />
        </div>
      </div>
      
      {/* Security Section Grid */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <TwoFactorAuth />
        <PasswordProtocol />
        <SecurityEvents />
      </div>
      
      {/* Footer */}
      <footer className="pt-12 border-t border-surface-container-high flex justify-between items-center text-outline">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setActivePolicy('privacy')} className="text-xs font-medium hover:text-primary transition-colors">
            Privacy Policy
          </button>
          <button type="button" onClick={() => setActivePolicy('terms')} className="text-xs font-medium hover:text-primary transition-colors">
            Terms of Service
          </button>
          <button type="button" onClick={() => setActivePolicy('compliance')} className="text-xs font-medium hover:text-primary transition-colors">
            Compliance Docs
          </button>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-tighter">NexaVault v4.2.0 • Build 8821</p>
      </footer>

      {currentPolicy ? (
        <div className="fixed inset-y-0 left-64 right-0 z-[90] bg-slate-900/45 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon={currentPolicy.icon}>
                  {currentPolicy.icon}
                </span>
                <h4 className="text-lg font-bold text-primary">{currentPolicy.title}</h4>
              </div>
              <button type="button" onClick={() => setActivePolicy(null)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              {currentPolicy.lines.map((line) => (
                <div key={line} className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4 text-sm text-on-surface-variant leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
