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

        <div className="mt-6 bg-surface-container-low p-6 rounded-3xl relative z-10">
          <h4 className="font-headline font-bold text-sm text-primary uppercase tracking-wider mb-4">
            Verification Map
          </h4>
          <div className="rounded-xl overflow-hidden h-32 relative grayscale">
            <img
              className="w-full h-full object-cover opacity-60"
              alt="stylized map view of city grid in dark moody aesthetic"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_lI4xHFN21RyEGpw_ch1cEt_lIcA3cgD7shpmeIZj7OOYAwMfM2f9TlYLG_0kRAeeMdsFcFoFv73LQ2g-7MCfOJXjfNe5E3cutL4J5D5gVab_wKj_7828fNWIYV12fxjtLHD6ywyExGWJOtbnA1AGwZ40YJzyZ9f-ZeP8bHCPcuAa1WV19kv_SfgthgJMZ02hKG9Y22SMGqelqZDvEtVFfjB8nfxEICovjA9W7rI82mjCgRQpFdwKesjBqbBfIGB8ic87Vm2uEGc"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                ENCRYPTED CONNECTION: NYC HUB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
