export default function AllocationMix() {
  const allocations = [
    { label: 'Equities', percentage: 64, color: 'bg-primary' },
    { label: 'Fixed Income', percentage: 22, color: 'bg-blue-400' },
    { label: 'Cash/Stable', percentage: 14, color: 'bg-blue-200' },
  ];

  return (
    <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl">
      <h3 className="font-bold font-headline mb-6">Allocation Mix</h3>
      <div className="space-y-6">
        {allocations.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <span className="text-sm font-bold">{item.percentage}%</span>
          </div>
        ))}

        <div className="pt-6 border-t border-outline-variant/10">
          <div className="bg-surface-container-low rounded-lg p-4">
            <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Portfolio Health</p>
            <p className="text-lg font-bold text-emerald-600">Optimal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
