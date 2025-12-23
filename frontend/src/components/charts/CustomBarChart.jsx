import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip,Legend,ResponsiveContainer,Cell} from "recharts";
const CustomBarChart = ({data}) => {

    const getBarColor = (index) => {
        return index % 2 === 0 ? "var(--color-chart-1)" : "var(--color-chart-2)";
    };
    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length){
            return (
                <div className='bg-[var(--color-card)] shadow-xl rounded-lg p-3 border border-[var(--color-border)] transition-colors'>
                    <p className='text-xs font-medium text-[var(--color-text-secondary)] mb-1'>{payload[0].payload.category}</p>
                    <p className='text-sm font-semibold text-[var(--color-text-primary)]'>
                        ${payload[0].payload.amount}
                    </p>
                </div>
            );
        }
        return null;
    }
  return (
    <div className='mt-6'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-divider)" strokeOpacity={0.05} />
            <XAxis dataKey="category" tick={{fontSize: 12, fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} />
            <YAxis tick={{fontSize: 12, fill:"var(--color-text-secondary)" }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'var(--color-background)', opacity: 0.4}}/>
            <Bar dataKey="amount" radius={[6, 6, 0, 0]} >
                {data.map((entry, index) => (
                    <Cell key={index} fill={getBarColor(index)} />
                ))}
            </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart
