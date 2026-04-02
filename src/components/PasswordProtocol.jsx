export default function PasswordProtocol() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">key</span>
      </div>
      <h3 className="text-lg font-bold text-primary">Password Protocol</h3>
      <p className="text-sm text-on-surface-variant mt-2 mb-6">Last updated 4 months ago.</p>
      <button className="text-sm font-bold text-primary flex items-center gap-2 group">
        Change Password
        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
