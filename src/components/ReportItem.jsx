export default function ReportItem({ report }) {
  const statusIcons = {
    verified: { icon: 'check_circle', color: 'text-green-600', label: 'Verified', labelColor: 'text-green-700' },
    signed: { icon: 'history_edu', color: 'text-blue-600', label: 'Signed', labelColor: 'text-blue-700' },
    archiving: { icon: 'sync', color: 'text-slate-400', label: 'Archiving', labelColor: 'text-slate-500' },
  };

  const status = statusIcons[report.status];

  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl flex items-center justify-between group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="flex items-center gap-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${report.iconBg}`}>
          <span className="material-symbols-outlined text-3xl" data-icon={report.icon}>
            {report.icon}
          </span>
        </div>
        <div>
          <h5 className="font-headline font-bold text-lg text-primary">{report.title}</h5>
          <div className="flex items-center gap-3 mt-1">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${report.badgeColor}`}>
              {report.type}
            </span>
            <span className="text-on-surface-variant/60 text-xs font-medium">
              {report.size} • Generated {report.date}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-lg ${status.color}`}>{status.icon}</span>
          <span className={`text-xs font-bold uppercase ${status.labelColor}`}>{status.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all">
            <span className="material-symbols-outlined" data-icon="visibility">
              visibility
            </span>
          </button>
          <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all">
            <span className="material-symbols-outlined" data-icon="download">
              download
            </span>
          </button>
          <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-error transition-all">
            <span className="material-symbols-outlined" data-icon="more_vert">
              more_vert
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
