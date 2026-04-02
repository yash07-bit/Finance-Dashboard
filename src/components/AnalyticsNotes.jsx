export default function AnalyticsNotes() {
  const notes = [
    {
      id: 1,
      title: 'Diversification Alert',
      description: 'Your exposure to tech equities has increased by 8%. Consider rebalancing your portfolio to maintain your risk-adjusted profile.',
      icon: 'warning',
      borderColor: 'border-amber-400',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      buttonText: 'Analyze Exposure',
    },
    {
      id: 2,
      title: 'Tax Opportunity',
      description: 'Realized losses in Q2 could be harvested to offset current gains. This could potentially reduce your tax liability by up to 14%.',
      icon: 'savings',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      buttonText: 'View Tax Harvest',
    },
  ];

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {notes.map((note) => (
        <div key={note.id} className={`bg-surface-container-lowest p-6 rounded-xl border-l-4 ${note.borderColor} flex gap-5 items-start`}>
          <div className={`w-10 h-10 shrink-0 ${note.bgColor} ${note.textColor} flex items-center justify-center rounded-lg`}>
            <span className="material-symbols-outlined" data-icon={note.icon} style={{ fontVariationSettings: "'FILL' 1" }}>
              {note.icon}
            </span>
          </div>
          <div>
            <h4 className="font-bold font-headline mb-1">{note.title}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">{note.description}</p>
            <button className="mt-4 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
              {note.buttonText}{' '}
              <span className="material-symbols-outlined text-xs" data-icon="chevron_right">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
