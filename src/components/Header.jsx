export default function Header() {
  return (
    <header className="sticky top-0 w-full h-16 z-40 bg-surface-light border-b border-border-light shadow-sm">
      <div className="flex justify-between items-center px-8 h-full gap-6">
        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
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

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Notifications & User */}
          <div className="flex items-center gap-2 pl-2 border-l border-border-light">
            <button className="p-2 rounded-lg text-text-muted hover:text-primary-accent hover:bg-primary/5 transition-colors" title="Notifications">
              <span className="material-symbols-outlined text-lg">notifications</span>
            </button>
            
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-accent/20" 
                alt="User avatar" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4bW1AYoRttWifjTSQ3z52lsDzL19C2RpXKhrO-P_EXCz5gM6cJbzcdk-lMU0eronZdaHG74_liWsqdcGKMr3Y9xTGUV1nXjKVaJ-AIiX_EQ3KcAvLR8IXpokIB6KSIkwAeSy4LskaAFZcUmbljtjVVIEM7OtHJNuOgc-XAELTHFwVR1jX0Jto9Iz3C65whAeAnW0fwQlrAWcnlTN1X_RW3fBYMLduCVKYrk1S4IqeFJsHJIIJnzNxasu62vGKR0rxqNkW8Q8aykA"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
