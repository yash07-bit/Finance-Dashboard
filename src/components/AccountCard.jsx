export default function AccountCard({ account }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm relative overflow-hidden group">
      <div className="flex justify-between items-start mb-8">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${account.iconBg}`}>
          <span className="material-symbols-outlined text-3xl">{account.icon}</span>
        </div>
        <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
          settings
        </button>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-headline font-bold text-lg">{account.name}</h3>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${account.badgeColor}`}>
            {account.badge}
          </span>
        </div>
        <p className="text-on-surface-variant text-sm mb-4">{account.typeText}</p>
        <div className="font-headline text-2xl font-bold text-primary">{account.balanceText}</div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${account.borderColor}`}></div>
    </div>
  );
}
