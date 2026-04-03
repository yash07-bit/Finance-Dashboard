import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SettingsContent from '../components/SettingsContent';
import { useState } from 'react';

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="ml-0 md:ml-64 min-h-screen transition-margin duration-300">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <SettingsContent />
      </main>
    </>
  );
}
