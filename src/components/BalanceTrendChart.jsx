import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useEffect, useMemo, useRef, useState } from 'react';

import { formatCurrency } from '../utils/financeData';

function BalanceTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const value = payload[0]?.value ?? 0;

  return (
    <div className="rounded-xl border border-surface-container-highest bg-surface-container-lowest px-4 py-3 shadow-lg">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">{label}</p>
      <p className="mt-1 text-sm font-bold text-primary">{formatCurrency(value)}</p>
    </div>
  );
}

function useElementWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return undefined;

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect?.width ?? 0;
      setWidth(nextWidth);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, width };
}

export default function BalanceTrendChart({ series }) {
  const [range, setRange] = useState('6m');
  const { ref, width } = useElementWidth();
  const filteredSeries = useMemo(() => {
    if (range === '1y') return series.slice(-12);
    return series.slice(-6);
  }, [range, series]);

  const firstBalance = filteredSeries[0]?.balance ?? 0;
  const latestBalance = filteredSeries.at(-1)?.balance ?? 0;
  const growth = firstBalance ? (((latestBalance - firstBalance) / firstBalance) * 100).toFixed(1) : '0.0';

  const chartWidth = useMemo(() => Math.max(320, Math.floor(width || 0)), [width]);

  return (
    <div className="lg:col-span-8 bg-surface-container-low rounded-2xl p-8 relative overflow-hidden flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h4 className="text-lg font-bold font-headline text-primary">Balance Trend</h4>
          <p className="text-xs text-on-surface-variant">Current balance {formatCurrency(latestBalance)} • {growth}% over period</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRange('6m')}
            aria-pressed={range === '6m'}
            className={`${range === '6m' ? 'bg-white text-primary shadow-sm' : 'text-text-muted hover:bg-white/70'} px-4 py-2 rounded-lg text-xs font-semibold transition-colors`}
          >
            6 Months
          </button>
          <button
            type="button"
            onClick={() => setRange('1y')}
            aria-pressed={range === '1y'}
            className={`${range === '1y' ? 'bg-white text-primary shadow-sm' : 'text-text-muted hover:bg-white/70'} px-4 py-2 rounded-lg text-xs font-semibold transition-colors`}
          >
            1 Year
          </button>
        </div>
      </div>

      <div ref={ref} className="mt-2 h-[320px] w-full">
        {chartWidth > 0 && (
          <AreaChart width={chartWidth} height={320} data={filteredSeries} margin={{ top: 20, right: 12, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="balanceAreaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#031635" stopOpacity={0.42} />
                <stop offset="95%" stopColor="#031635" stopOpacity={0.06} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="rgba(3, 22, 53, 0.12)" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              interval={0}
              padding={{ left: 10, right: 10 }}
              tick={{ fill: 'rgba(3, 22, 53, 0.8)', fontSize: 11, fontWeight: 700 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={84}
              tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
              tick={{ fill: 'rgba(3, 22, 53, 0.8)', fontSize: 11, fontWeight: 700 }}
              domain={['dataMin - 40000', 'dataMax + 40000']}
            />
            <Tooltip content={<BalanceTooltip />} />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#031635"
              strokeWidth={4}
              fill="url(#balanceAreaFill)"
              dot={{ r: 4, fill: '#031635', stroke: '#ffffff', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#031635', stroke: '#ffffff', strokeWidth: 2 }}
            />
          </AreaChart>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-on-surface-variant">
        {filteredSeries.map((item) => (
          <div key={item.month} className="rounded-xl bg-surface-container-lowest px-3 py-2 border border-surface-container-highest/60">
            <p className="font-semibold uppercase tracking-widest text-[10px]">{item.month}</p>
            <p className="mt-1 font-bold text-primary">{formatCurrency(item.balance)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
