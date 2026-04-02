export default function SecurityStatus() {
  return (
    <div className="bg-primary rounded-2xl p-6 text-on-primary">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
          security
        </span>
        <span className="text-[10px] uppercase font-black tracking-widest opacity-60">System Status</span>
      </div>
      <h4 className="text-xl font-bold leading-tight">Your account is fully secured.</h4>
      <p className="text-sm opacity-70 mt-2">All security modules are currently active and monitored.</p>
    </div>
  );
}
