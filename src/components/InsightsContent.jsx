import InsightsHeader from './InsightsHeader';
import VolumeAnalysis from './VolumeAnalysis';
import HighestSpending from './HighestSpending';
import MonthlyComparison from './MonthlyComparison';
import AnalyticsNotes from './AnalyticsNotes';
import AllocationMix from './AllocationMix';
import MarketSentiment from './MarketSentiment';

export default function InsightsContent() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <InsightsHeader />

      {/* Insight Bento Grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Main Trend: Volume Analysis */}
        <VolumeAnalysis />

        {/* Right Column - Spending & Comparison */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 md:gap-6">
          <HighestSpending />
          <MonthlyComparison />
        </div>

        {/* Analytics Notes */}
        <AnalyticsNotes />

        {/* Secondary Data Grid */}
        <AllocationMix />
        <MarketSentiment />
      </div>
    </div>
  );
}
