import { useState } from 'react';
import { formatCurrency, getReportMetrics } from '../utils/financeData';

export default function AnalyticsNotes() {
  const [expandedNote, setExpandedNote] = useState(null);
  const { categoryDistribution } = getReportMetrics();

  const techExposure = categoryDistribution.find((cat) => cat.name.toLowerCase().includes('technology'))?.percentage || 0;
  const potentialTaxSavings = 2400;
  const currentYearGains = 18500;
  const harvestableLosses = 14200;

  const notes = [
    {
      id: 1,
      title: 'Diversification Alert',
      description: `Your exposure to tech equities has increased by ${techExposure}%. Consider rebalancing your portfolio to maintain your risk-adjusted profile.`,
      icon: 'warning',
      borderColor: 'border-amber-400',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      buttonText: 'Analyze Exposure',
      action: 'analyze-exposure',
      details: `Tech Exposure: ${techExposure}%\n\nYour technology sector allocation has grown beyond recommended thresholds. Current portfolio composition suggests a higher concentration risk.\n\nRecommendations:\n• Consider reducing tech holdings\n• Increase allocation to other sectors\n• Review risk tolerance`,
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
      action: 'view-tax-harvest',
      details: `Available tax loss harvesting opportunities:\n\n• Potential tax savings: ${formatCurrency(potentialTaxSavings)}\n• Current year gains: ${formatCurrency(currentYearGains)}\n• Harvestable losses: ${formatCurrency(harvestableLosses)}\n\nAction: Review your portfolio for loss-making positions`,
    },
  ];

  const handleNoteAction = (noteId) => {
    setExpandedNote(expandedNote === noteId ? null : noteId);
  };

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {notes.map((note) => (
        <div key={note.id}>
          <div className={`bg-white p-6 rounded-xl border-l-4 ${note.borderColor} flex gap-5 items-start border border-slate-200`}>
            <div className={`w-10 h-10 shrink-0 ${note.bgColor} ${note.textColor} flex items-center justify-center rounded-lg`}>
              <span className="material-symbols-outlined" data-icon={note.icon} style={{ fontVariationSettings: "'FILL' 1" }}>
                {note.icon}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold font-headline mb-1 text-primary">{note.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{note.description}</p>
              <button
                type="button"
                onClick={() => handleNoteAction(note.id)}
                className="mt-4 text-xs font-bold text-primary flex items-center gap-1 hover:text-primary-accent transition-colors"
              >
                {expandedNote === note.id ? 'Hide' : note.buttonText}{' '}
                <span className="material-symbols-outlined text-xs transition-transform" style={{ transform: expandedNote === note.id ? 'rotate(90deg)' : 'rotate(0)' }}>
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          {expandedNote === note.id && (
            <div className="mt-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-700 whitespace-pre-line leading-relaxed">
              {note.details}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
