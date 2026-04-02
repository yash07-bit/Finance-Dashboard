export default function InsightsHeader() {
  return (
    <section className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-5xl font-extrabold font-headline tracking-tight text-on-surface">Intelligence.</h2>
        <p className="text-on-surface-variant mt-2 max-w-md">
          Predictive analytics and performance metrics curated for your liquidity profile.
        </p>
      </div>
      <div className="flex gap-2">
        <span className="px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">
          Live Feed
        </span>
        <span className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-semibold">
          Q2 2024
        </span>
      </div>
    </section>
  );
}
