export default function HighestSpending() {
  return (
    <div className="bg-primary text-white p-6 sm:p-7 lg:p-8 rounded-xl flex-1 relative overflow-hidden min-h-[300px] min-w-0">
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6">
        <div className="max-w-[26rem]">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 mx-auto">
            <span className="material-symbols-outlined text-white" data-icon="restaurant_menu">
              restaurant_menu
            </span>
          </div>
          <h3 className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] mb-2">Highest Spending</h3>
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-headline leading-tight max-w-full break-words">
            Luxury & Dining
          </p>
        </div>
        <div className="max-w-[26rem] w-full">
          <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
            <span className="text-3xl sm:text-4xl font-black font-headline text-emerald-300 leading-none">+24%</span>
            <span className="text-sm text-white/75">above average</span>
          </div>
          <p className="text-white/70 text-xs mt-3.5 leading-relaxed max-w-full break-words">
            Your dining expenditure has exceeded your 6-month historical average. Most activity occurred in the 'Fine Dining' sub-category.
          </p>
        </div>
      </div>

      {/* Abstract Gradient Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl"></div>
    </div>
  );
}
