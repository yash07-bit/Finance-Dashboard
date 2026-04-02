export default function MonthlyNetMovement({ movement = [] }) {
  const chartHeight = 160;
  const maxCombined = Math.max(...movement.map((m) => (m.revenue || 0) + (m.burn || 0)), 1);

  return (
    <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <h4 className="font-headline font-bold text-lg">Monthly Net Movement</h4>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span className="text-xs font-medium text-on-surface-variant">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
            <span className="text-xs font-medium text-on-surface-variant">Burn delta</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-end justify-between h-48 gap-3 px-2" style={{ minWidth: `${Math.max(movement.length * 56, 360)}px` }}>
          {movement.map((item) => {
            const combined = (item.revenue || 0) + (item.burn || 0);
            const totalHeight = Math.max(8, (combined / maxCombined) * chartHeight);
            const burnRatio = combined > 0 ? (item.burn || 0) / combined : 0;
            const burnHeight = Math.max(4, totalHeight * burnRatio);
            const revenueHeight = Math.max(4, totalHeight - burnHeight);

            return (
              <div key={item.month} className="flex-1 min-w-[42px] flex flex-col gap-1 items-end justify-end">
                <div className="w-full bg-secondary-container rounded-t-lg" style={{ height: `${burnHeight}px` }}></div>
                <div className="w-full bg-primary rounded-b-lg" style={{ height: `${revenueHeight}px` }}></div>
                <span className="text-[10px] font-bold mt-4 text-on-surface-variant/50">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
