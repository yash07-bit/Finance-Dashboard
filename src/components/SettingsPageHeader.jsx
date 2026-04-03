export default function SettingsPageHeader() {
  return (
    <section className="flex flex-col justify-between items-start gap-2">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary">Settings</h2>
        <p className="text-on-surface-variant mt-2 max-w-md text-sm md:text-base">Manage your account preferences, security protocols, and platform settings.</p>
      </div>
    </section>
  );
}
