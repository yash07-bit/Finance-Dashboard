import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SettingsContent from '../components/SettingsContent';

export default function Settings() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <Header />
        <SettingsContent />
      </main>
    </>
  );
}
