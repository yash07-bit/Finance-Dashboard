export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 w-full h-16 z-40 bg-surface-light border-b border-border-light shadow-sm flex items-center gap-2 px-4 md:px-8 md:gap-0">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden w-10 h-10 bg-primary-accent text-white rounded-lg flex items-center justify-center flex-shrink-0"
      >
        <span className="material-symbols-outlined text-base">
          {sidebarOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Search Bar Container */}
      <div className="flex-1 md:px-8">
        <div className="relative w-full max-w-2xl mx-auto md:mx-0">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-lg">
            search
          </span>
          <input
            className="w-full bg-white border border-border-light rounded-lg py-2 pl-10 pr-4 text-sm text-primary placeholder:text-text-muted/80 focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent transition-all"
            placeholder="Search transactions..."
            type="text"
          />
        </div>
      </div>
    </header>
  );
}
