import { formatCurrency } from '../utils/mockData';

export default function PortfolioVelocity({ portfolioValue, velocityPct }) {
  const pct = `${velocityPct >= 0 ? '+' : ''}${velocityPct.toFixed(1)}%`;

  return (
    <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Portfolio Velocity</span>
          <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-1 rounded-full">{pct}</span>
        </div>
        <h3 className="text-5xl font-extrabold font-headline tracking-tighter text-primary">{formatCurrency(portfolioValue)}</h3>
        <p className="text-sm text-on-surface-variant/70 mt-4">Net asset appreciation since last fiscal year closing.</p>
      </div>
      <div className="mt-8 flex items-end gap-1 h-12">
        <div className="w-full bg-primary/10 h-4 rounded-t-sm"></div>
        <div className="w-full bg-primary/10 h-6 rounded-t-sm"></div>
        <div className="w-full bg-primary/10 h-8 rounded-t-sm"></div>
        <div className="w-full bg-primary/10 h-5 rounded-t-sm"></div>
        <div className="w-full bg-primary/10 h-9 rounded-t-sm"></div>
        <div className="w-full bg-primary h-12 rounded-t-sm shadow-md"></div>
      </div>
    </div>
  );
}
