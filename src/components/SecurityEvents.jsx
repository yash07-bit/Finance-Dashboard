import { useState } from 'react';

export default function SecurityEvents() {
  const [showAuditLog, setShowAuditLog] = useState(false);

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
      <button type="button" onClick={() => setShowAuditLog(true)} className="mt-4 text-[10px] font-bold text-secondary uppercase tracking-widest text-center hover:opacity-70">
        View Full Audit Log
      </button>

      {showAuditLog ? (
        <div className="fixed inset-0 z-[90] bg-slate-900/45 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
              <h4 className="text-base sm:text-lg font-bold text-primary">Full Audit Log</h4>
              <button type="button" onClick={() => setShowAuditLog(false)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-3">
              {events.map((event, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-surface-container-lowest p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div>
                    <p className="text-sm font-bold text-primary">{event.title}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{event.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-outline whitespace-nowrap">{event.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
