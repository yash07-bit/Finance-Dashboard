export default function MonthlyNetMovement({ movement = [] }) {
  const maxValue = Math.max(...movement.map((m) => Math.max(m.revenue, m.burn)), 1);

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
      <div className="flex items-end justify-between h-48 gap-4 px-2">
        {movement.map((item) => (
          <div key={item.month} className="flex-1 flex flex-col gap-1 items-center">
            <div className="w-full bg-secondary-container rounded-t-lg" style={{ height: `${Math.max(10, (item.burn / maxValue) * 96)}px` }}></div>
            <div className="w-full bg-primary rounded-b-lg" style={{ height: `${Math.max(10, (item.revenue / maxValue) * 96)}px` }}></div>
            <span className="text-[10px] font-bold mt-4 text-on-surface-variant/50">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
