export default function InsightsHeader() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-12">
      <div>
        <h2 className="text-5xl font-extrabold font-headline tracking-tight text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-accent text-4xl">auto_graph</span>
          Intelligence.
        </h2>
        <p className="text-text-muted mt-2 max-w-md">
          Predictive analytics and performance metrics curated for your liquidity profile.
        </p>
      </div>
      <div className="flex gap-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary-accent/15 text-primary-accent rounded-full text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">sensors</span>
          Live Feed
        </span>
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-200 text-slate-700 rounded-full text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">calendar_month</span>
          Q2 2024
        </span>
      </div>
    </section>
  );
}
