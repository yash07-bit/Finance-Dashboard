import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ReportsContent from '../components/ReportsContent';

export default function Reports() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <Header />
        <ReportsContent />
      </main>
    </>
  );
}
