import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AccountsContent from '../components/AccountsContent';

export default function Accounts() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <Header />
        <AccountsContent />
      </main>
    </>
  );
}
