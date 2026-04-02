export default function Header() {
  return (
    <header className="sticky top-0 w-full h-16 z-40 bg-surface-light border-b border-border-light shadow-sm">
      <div className="grid grid-cols-1 px-8 h-full">
        <div />
        {/* Search Bar */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-full max-w-2xl mx-auto">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-lg">
              search
            </span>
            <input
              className="w-full bg-white border border-border-light rounded-lg py-2.5 pl-10 pr-4 text-sm text-primary placeholder:text-text-muted/80 focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent transition-all"
              placeholder="Search transactions or accounts..."
              type="text"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
