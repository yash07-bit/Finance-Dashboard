import { formatCurrency } from '../utils/financeData';

export default function BudgetInsights({ topCategory }) {
  const categoryName = topCategory?.name ?? 'Operations';
  const categorySpend = topCategory?.spent ?? 0;
  const reallocateAmount = Math.max(500, Math.round(categorySpend * 0.12));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-3 bg-surface-container-low rounded-3xl p-8 flex items-center gap-8">
        <img
          className="w-32 h-32 rounded-2xl object-cover shadow-xl"
          alt="abstract financial data visualization with glowing blue lines and charts"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaB9-lHx5G79S7-RgzMcUYFPkD6RzpDJ0-FLEDHeaEIlP8MQpEawOnt5vsvgi_3oTU1d2oF1Lebmhbt5psavRYJcRFrCFM3N78uznse6VMkAqWaMea4Zs4B0aA8zvzcOMoawFve7p9ZGRUJ1tZMr75jk1oo0Fro6L0tT-GLkHWuOXFJ41DTfH-TAM-VP4hThBXUnV6UxGOGWc9YG6tukU769O_RYPovye2nPSScweU69nQD0wbz0MO2QdwF2uYeu1u7Vco4_8ns8o"
        />
        <div>
          <h4 className="text-xl font-headline font-bold text-primary">Budget Optimization Insight</h4>
          <p className="text-on-surface-variant mt-2 max-w-xl">
            Based on current spend distribution, <span className="text-primary font-semibold">{categoryName}</span> is your highest expense area.
            Consider reallocating {formatCurrency(reallocateAmount)} into growth-focused categories to improve monthly efficiency.
          </p>
        </div>
        <button className="ml-auto text-blue-600 font-bold flex items-center gap-2 group whitespace-nowrap hover:text-blue-700">
          Review Plan
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between">
        <span className="material-symbols-outlined text-4xl" data-icon="verified_user">
          verified_user
        </span>
        <div>
          <p className="text-sm font-medium text-blue-100">Fiscal Health</p>
          <p className="text-2xl font-bold font-headline mt-1">Excellent</p>
        </div>
      </div>
    </div>
  );
}
