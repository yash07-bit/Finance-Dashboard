const colorPool = ['bg-primary', 'bg-blue-500', 'bg-blue-300', 'bg-emerald-400', 'bg-slate-300', 'bg-violet-400'];

export default function CategorySpending({ categories = [] }) {
  const topCategory = categories[0] || { name: 'N/A', percentage: 0 };
  const displayCategories = categories.slice(0, 6).map((category, index) => ({
    ...category,
    color: colorPool[index % colorPool.length],
  }));

  return (
    <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-8 shadow-sm shadow-slate-200/5">
      <h4 className="text-lg font-bold font-headline text-primary mb-6">Category Spending</h4>
      
      <div className="relative w-48 h-48 mx-auto mb-8">
        {/* Custom CSS Ring Simulation */}
        <div className="absolute inset-0 rounded-full border-[18px] border-surface-container-low"></div>
        <div className="absolute inset-0 rounded-full border-[18px] border-primary border-r-transparent border-b-transparent rotate-12"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-headline text-primary">{topCategory.percentage}%</span>
          <span className="text-[10px] text-on-surface-variant uppercase font-bold">{topCategory.name}</span>
        </div>
      </div>

      <div className="space-y-4">
        {displayCategories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
            <span className="text-sm font-bold">{category.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
