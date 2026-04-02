import SettingsPageHeader from './SettingsPageHeader';
import ProfileSection from './ProfileSection';
import AppPreferences from './AppPreferences';
import SecurityStatus from './SecurityStatus';
import TwoFactorAuth from './TwoFactorAuth';
import PasswordProtocol from './PasswordProtocol';
import SecurityEvents from './SecurityEvents';

export default function SettingsContent() {
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
          <span className="text-xs font-medium">Privacy Policy</span>
          <span className="text-xs font-medium">Terms of Service</span>
          <span className="text-xs font-medium">Compliance Docs</span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-tighter">Lumina Finance v4.2.0 • Build 8821</p>
      </footer>
    </div>
  );
}
