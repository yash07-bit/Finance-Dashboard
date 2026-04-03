import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BudgetsContent from '../components/BudgetsContent';
import { useState } from 'react';

export default function Budgets() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="ml-0 md:ml-64 min-h-screen flex flex-col transition-margin duration-300">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <BudgetsContent />
      </main>
    </>
  );
}
