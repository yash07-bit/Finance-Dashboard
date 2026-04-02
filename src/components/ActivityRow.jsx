export default function ActivityRow({ activity }) {
  return (
    <tr className="bg-surface-container-lowest rounded-xl">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.iconBg}`}>
            <span className="material-symbols-outlined text-lg">{activity.icon}</span>
          </div>
          <div>
            <div className="font-semibold text-on-surface">{activity.title}</div>
            <div className="text-xs text-on-surface-variant">{activity.subtitle}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-on-surface-variant font-medium">{activity.account}</td>
      <td className={`px-6 py-4 text-right font-bold ${activity.amountColor}`}>{activity.amount}</td>
      <td className="px-6 py-4 text-right">
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${activity.statusColor}`}>
          {activity.status}
        </span>
      </td>
    </tr>
  );
}
