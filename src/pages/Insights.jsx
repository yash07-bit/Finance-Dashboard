import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import InsightsContent from '../components/InsightsContent';

export default function Insights() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <Header />
        <InsightsContent />
      </main>
    </>
  );
}
