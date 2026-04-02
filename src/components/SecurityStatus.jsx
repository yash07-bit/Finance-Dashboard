export default function SecurityStatus() {
  return (
    <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-300/22 rounded-bl-[2.5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110 shadow-inner"></div>
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
          security
        </span>
        <span className="text-[10px] uppercase font-black tracking-widest opacity-70">System Status</span>
      </div>
      <h4 className="text-xl font-bold leading-tight">Your account is fully secured.</h4>
      <p className="text-sm opacity-80 mt-2">All security modules are currently active and monitored.</p>
    </div>
  );
}
