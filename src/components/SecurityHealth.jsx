export default function SecurityHealth() {
  return (
    <div className="lg:col-span-4">
      <h3 className="font-headline font-bold text-xl text-primary mb-6">Security Health</h3>
      <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
        <div className="relative z-10">
          <span
            className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified_user
          </span>
          <h4 className="font-headline font-bold text-xl mb-2">Maximum Protection</h4>
          <p className="text-on-primary-container text-sm leading-relaxed mb-6">
            Your hardware wallets and corporate accounts are using multi-sig authorization.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
              <span className="material-symbols-outlined text-emerald-400">check_circle</span>
              <span className="text-xs font-medium">Hardware Sync: Active</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
              <span className="material-symbols-outlined text-emerald-400">check_circle</span>
              <span className="text-xs font-medium">2FA Compliance: 100%</span>
            </div>
          </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}
