import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <Header />
        <DashboardContent />
      </main>
    </>
  );
}
