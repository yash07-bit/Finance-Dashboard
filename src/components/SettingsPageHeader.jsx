export default function SettingsPageHeader() {
  return (
    <section className="flex justify-between items-end">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary">Settings</h2>
        <p className="text-on-surface-variant mt-2 max-w-md">Manage your account preferences, security protocols, and platform appearance.</p>
      </div>
      <div className="flex gap-3">
        <button className="px-5 py-2.5 bg-surface-container-low text-primary font-semibold rounded-xl hover:bg-surface-container-high transition-colors scale-98-on-click">
          Discard
        </button>
        <button className="px-5 py-2.5 bg-primary text-on-primary font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/10 scale-98-on-click">
          Save Changes
        </button>
      </div>
    </section>
  );
}
