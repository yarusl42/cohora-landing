"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface CostChartProps {
  data: Array<{
    month: string;
    seo: number;
    ppc: number;
  }>;
  chart: {
    title: string;
    xTickMonthSuffix: string;
    tooltipMonthLabel: string;
    legendSeo: string;
    legendPpc: string;
    currencySuffix: string;
  };
}

export const CostChart = ({ data, chart }: CostChartProps) => {
  const yTickFormat = (value: number) => `${value}${chart.currencySuffix}`;
  const tooltipValueFormat = (value: number) =>
    `${value}${chart.currencySuffix}`;

  return (
    <div className="rounded-lg border border-border p-4 bg-muted/40">
      <p className="text-xs font-medium text-foreground mb-3">{chart.title}</p>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10 }}
              tickFormatter={(v) =>
                v === "0" ? "0" : `${v}${chart.xTickMonthSuffix}`
              }
            />
            <YAxis
              tick={{ fontSize: 10 }}
              tickFormatter={yTickFormat}
              ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3]}
              domain={[0, 3]}
            />
            <Tooltip
              formatter={(value: number) => [tooltipValueFormat(value), ""]}
              labelFormatter={(label) => `${label} ${chart.tooltipMonthLabel}`}
            />
            <Legend
              formatter={(value: string) =>
                value === "seo" ? chart.legendSeo : chart.legendPpc
              }
            />
            <Line
              type="natural"
              dataKey="ppc"
              stroke="#fb923c"
              strokeWidth={2}
              dot={{ r: 3 }}
              name={chart.legendPpc}
            />
            <Line
              type="natural"
              dataKey="seo"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={{ r: 3 }}
              name={chart.legendSeo}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
