import { useState } from 'react';

export default function PasswordProtocol() {
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('Last updated 4 months ago.');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newPassword || newPassword !== confirmPassword || newPassword.length < 8) {
      setMessage('Use at least 8 characters and make sure both passwords match.');
      return;
    }

    setMessage('Password updated successfully.');
    setShowModal(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">key</span>
      </div>
      <h3 className="text-lg font-bold text-primary">Password Protocol</h3>
      <p className="text-sm text-on-surface-variant mt-2 mb-6">{message}</p>
      <button type="button" onClick={() => setShowModal(true)} className="text-sm font-bold text-primary flex items-center gap-2 group">
        Change Password
        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>

      {showModal ? (
        <div className="fixed inset-y-0 left-64 right-0 z-[90] bg-slate-900/45 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-2xl">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">Change Password</h4>
              <button type="button" onClick={() => setShowModal(false)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                placeholder="New password"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                required
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm password"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent"
                required
              />
              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
