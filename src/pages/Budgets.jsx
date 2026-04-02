import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BudgetsContent from '../components/BudgetsContent';

export default function Budgets() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen flex flex-col">
        <Header />
        <BudgetsContent />
      </main>
    </>
  );
}
