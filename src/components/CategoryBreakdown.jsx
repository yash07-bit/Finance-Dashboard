import CategoryCard from './CategoryCard';

export default function CategoryBreakdown({ rows = [] }) {
  const iconMap = {
    'Food & Dining': { icon: 'restaurant', iconBg: 'bg-orange-100 text-orange-600' },
    Housing: { icon: 'home', iconBg: 'bg-blue-100 text-blue-600' },
    Entertainment: { icon: 'movie', iconBg: 'bg-error-container text-error' },
    Transport: { icon: 'directions_car', iconBg: 'bg-green-100 text-green-600' },
    Technology: { icon: 'cloud', iconBg: 'bg-indigo-100 text-indigo-600' },
    Marketing: { icon: 'campaign', iconBg: 'bg-violet-100 text-violet-600' },
    Operations: { icon: 'work', iconBg: 'bg-slate-200 text-slate-700' },
  };

  const categories = rows.map((row) => ({
    ...row,
    ...(iconMap[row.name] || { icon: 'category', iconBg: 'bg-slate-100 text-slate-600' }),
  }));

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-headline font-bold text-primary px-1">Category Breakdown</h4>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}
