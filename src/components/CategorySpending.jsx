import { useNavigate } from 'react-router-dom';

const colorPool = [
  { dot: 'bg-primary', hex: '#0F172A' },
  { dot: 'bg-blue-500', hex: '#3B82F6' },
  { dot: 'bg-blue-300', hex: '#93C5FD' },
  { dot: 'bg-emerald-400', hex: '#34D399' },
  { dot: 'bg-slate-300', hex: '#CBD5E1' },
  { dot: 'bg-violet-400', hex: '#A78BFA' },
];

export default function CategorySpending({ categories = [] }) {
  const navigate = useNavigate();

  const normalizedCategories = categories
    .filter((category) => category?.name)
    .slice(0, 6)
    .map((category, index) => ({
      ...category,
      amount: Number(category.amount) || 0,
      percentage: Number(category.percentage) || 0,
      color: colorPool[index % colorPool.length],
    }));

  const totalAmount = normalizedCategories.reduce((sum, category) => sum + category.amount, 0);
  const totalPercentage = normalizedCategories.reduce((sum, category) => sum + category.percentage, 0);

  const displayCategories = normalizedCategories.map((category) => {
    const computedPercentage = totalAmount > 0
      ? Math.round((category.amount / totalAmount) * 100)
      : totalPercentage > 0
        ? Math.round((category.percentage / totalPercentage) * 100)
        : 0;

    return {
      ...category,
      percentage: computedPercentage,
    };
  });

  const sortedCategories = [...displayCategories].sort((a, b) => b.percentage - a.percentage);
  const topCategory = sortedCategories[0] || { name: 'N/A', percentage: 0 };

  let runningPercentage = 0;
  const gradientSlices = displayCategories.map((category) => {
    const start = runningPercentage;
    const end = Math.min(100, runningPercentage + category.percentage);
    runningPercentage = end;
    return `${category.color.hex} ${start}% ${end}%`;
  });

  if (runningPercentage < 100) {
    gradientSlices.push(`#E2E8F0 ${runningPercentage}% 100%`);
  }

  const ringStyle = {
    background: `conic-gradient(${gradientSlices.length ? gradientSlices.join(', ') : '#E2E8F0 0% 100%'})`,
    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 18px), #000 calc(100% - 17px))',
    mask: 'radial-gradient(farthest-side, transparent calc(100% - 18px), #000 calc(100% - 17px))',
  };

  return (
    <div className="lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm shadow-slate-200/5">
      <h4 className="text-lg font-bold font-headline text-primary mb-6">Category Spending</h4>
      
      <div className="relative w-48 h-48 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full" style={ringStyle}></div>
        <button
          type="button"
          onClick={() => navigate('/budgets')}
          className="absolute inset-0 flex flex-col items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          aria-label={`Open budgets for ${topCategory.name}`}
          title="Open Budgets"
        >
          <span className="text-2xl font-bold font-headline text-primary">{topCategory.percentage}%</span>
          <span className="text-[10px] text-text-muted uppercase font-bold">{topCategory.name}</span>
        </button>
      </div>

      <div className="space-y-4">
        {displayCategories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${category.color.dot}`}></span>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
            <span className="text-sm font-bold">{category.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
