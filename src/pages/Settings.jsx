import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SettingsContent from '../components/SettingsContent';

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <SettingsContent />
      </div>
    </div>
  );
}
