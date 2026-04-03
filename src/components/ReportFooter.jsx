import { useState } from 'react';

const auditEntries = [
  { time: '09:14', event: 'Report export approved', detail: 'CSV spreadsheet downloaded for Q1 review.' },
  { time: '10:32', event: 'Compliance score updated', detail: '4/5 controls passed during daily validation.' },
  { time: '13:05', event: 'Ledger preview opened', detail: 'Executive ledger preview accessed from reports panel.' },
];

const privacyItems = [
  'Transaction data is stored locally in the current workspace only.',
  'Exports are generated on demand and are not sent to external services.',
  'Sensitive values are displayed using the app theme and formatting rules.',
];

const vulnerabilityItems = [
  'Report any disclosure concerns through your internal security workflow.',
  'Use least-privilege access for report exports and archive review.',
  'Rotate report credentials and review audit logs regularly.',
];

export default function ReportFooter() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    audit: {
      title: 'Audit Logs',
      icon: 'history',
      items: auditEntries,
      type: 'audit',
    },
    privacy: {
      title: 'Privacy Protocol',
      icon: 'lock',
      items: privacyItems,
      type: 'list',
    },
    disclosure: {
      title: 'Vulnerability Disclosure',
      icon: 'shield',
      items: vulnerabilityItems,
      type: 'list',
    },
  };

  const currentSection = activeSection ? sections[activeSection] : null;

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-8 md:pt-12 border-t border-outline-variant/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 lg:gap-12 text-center sm:text-left">
          <div className="flex flex-col min-w-0 items-center sm:items-start">
            <span className="text-[10px] uppercase font-bold text-on-surface-variant/40 tracking-[0.2em] mb-2 text-center sm:text-left">Compliance Rating</span>
            <div className="flex justify-center sm:justify-start gap-1 text-primary">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-base leading-none" data-icon="star">
                  star
                </span>
              ))}
              <span className="material-symbols-outlined text-base leading-none text-surface-container-highest" data-icon="star">
                star
              </span>
            </div>
          </div>
          <div className="flex flex-col min-w-0 items-center sm:items-start">
            <span className="text-[10px] uppercase font-bold text-on-surface-variant/40 tracking-[0.2em] mb-2 text-center sm:text-left">Data Integrity</span>
            <span className="text-sm font-bold text-primary text-center sm:text-left">AES-256 Encrypted</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 lg:gap-6">
          <button type="button" onClick={() => setActiveSection('audit')} className="text-xs font-semibold text-on-surface-variant/60 hover:text-primary transition-colors whitespace-nowrap text-center">
            Audit logs
          </button>
          <button type="button" onClick={() => setActiveSection('privacy')} className="text-xs font-semibold text-on-surface-variant/60 hover:text-primary transition-colors whitespace-nowrap text-center">
            Privacy protocol
          </button>
          <button type="button" onClick={() => setActiveSection('disclosure')} className="text-xs font-semibold text-on-surface-variant/60 hover:text-primary transition-colors whitespace-nowrap text-center">
            Vulnerability disclosure
          </button>
        </div>
      </div>

      {currentSection ? (
        <div className="fixed inset-0 z-[90] bg-slate-900/45 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon={currentSection.icon}>
                  {currentSection.icon}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-primary">{currentSection.title}</h4>
              </div>
              <button type="button" onClick={() => setActiveSection(null)} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              {currentSection.type === 'audit' ? (
                <div className="space-y-3">
                  {currentSection.items.map((entry) => (
                    <div key={`${entry.time}-${entry.event}`} className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div>
                        <p className="text-sm font-bold text-primary">{entry.event}</p>
                        <p className="text-sm text-on-surface-variant mt-1">{entry.detail}</p>
                      </div>
                      <span className="text-xs font-semibold text-on-surface-variant/60 whitespace-nowrap">{entry.time}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {currentSection.items.map((item) => (
                    <li key={item} className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4 text-sm text-on-surface-variant">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
