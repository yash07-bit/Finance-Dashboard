export default function SecurityEvents() {
  const events = [
    { title: 'Successful Login', location: 'London, UK • Mac OS', time: 'Just now' },
    { title: 'Password Change', location: 'System Automated', time: '4 mo ago' },
    { title: 'New API Key Generated', location: 'Desk Terminal 04', time: '5 mo ago' }
  ];

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col">
      <h3 className="text-lg font-bold text-primary mb-4">Security Events</h3>
      <div className="space-y-4 flex-1">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center justify-between ${
              index !== events.length - 1 ? 'pb-3 border-b border-surface-container-low' : ''
            }`}
          >
            <div>
              <p className="text-xs font-bold">{event.title}</p>
              <p className="text-[10px] text-on-surface-variant">{event.location}</p>
            </div>
            <span className="text-[10px] font-medium text-outline">{event.time}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 text-[10px] font-bold text-secondary uppercase tracking-widest text-center hover:opacity-70">
        View Full Audit Log
      </button>
    </div>
  );
}
