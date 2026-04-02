import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TransactionsContent from '../components/TransactionsContent';

export default function Transactions() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen flex flex-col">
        <Header />
        <TransactionsContent />
      </main>
    </>
  );
}
