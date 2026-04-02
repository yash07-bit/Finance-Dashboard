export default function CategoryDistribution({ categories = [] }) {
  const colors = ['bg-primary', 'bg-secondary-container', 'bg-on-primary-container', 'bg-surface-variant'];
  const mapped = categories.map((category, index) => ({
    ...category,
    color: colors[index % colors.length],
    isOther: index === categories.length - 1,
  }));

  return (
    <div className="col-span-12 lg:col-span-3 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm">
      <h4 className="font-headline font-bold text-lg mb-8">Category Distribution</h4>
      <div className="space-y-8">
        {mapped.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-xs font-semibold ${category.isOther ? 'text-on-surface-variant/60' : 'text-on-surface'}`}>
                {category.name}
              </span>
              <span className={`text-xs font-bold ${category.isOther ? 'text-on-surface-variant/60' : 'text-primary'}`}>
                {category.percentage}%
              </span>
            </div>
            <div className={`h-2 w-full ${category.isOther ? 'bg-surface-container-high/50' : 'bg-surface-container-high'} rounded-full overflow-hidden`}>
              <div className={`h-full ${category.color}`} style={{ width: `${category.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
