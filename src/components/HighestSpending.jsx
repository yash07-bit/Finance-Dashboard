export default function HighestSpending() {
  return (
    <div className="bg-primary text-white p-8 rounded-xl flex-1 relative overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-white" data-icon="restaurant_menu">
              restaurant_menu
            </span>
          </div>
          <h3 className="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Highest Spending</h3>
          <p className="text-3xl font-extrabold font-headline leading-tight">Luxury & Dining</p>
        </div>
        <div className="mt-8">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-secondary-fixed-dim">+24%</span>
            <span className="text-sm text-on-primary-container">above average</span>
          </div>
          <p className="text-on-primary-container text-xs mt-4 leading-relaxed">
            Your dining expenditure has exceeded your 6-month historical average. Most activity occurred in the 'Fine Dining' sub-category.
          </p>
        </div>
      </div>

      {/* Abstract Gradient Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl"></div>
    </div>
  );
}
