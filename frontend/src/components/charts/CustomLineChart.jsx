    import React from 'react'
    import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart} from "recharts"
    const CustomLineChart = ({data}) => {
        const CustomTooltip = ({active, payload})=>{
            if (active && payload && payload.length){
                return (
                    <div className='bg-[var(--color-card)] shadow-xl rounded-lg p-3 border border-[var(--color-border)] transition-colors'>
                        <p className='text-xs font-medium text-[var(--color-text-secondary)] mb-1 '>{payload[0].payload.month}</p>
                        <p className='text-sm font-semibold text-[var(--color-text-primary)]'>
                            ${payload[0].payload.amount}
                        </p>
                    </div>
                )
            }
        }
        return (
            <div className='mt-6'>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id='incomeGradient' x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor='var(--color-chart-2)' stopOpacity={0.3} />
                                <stop offset="95%" stopColor='var(--color-chart-4)' stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-divider)" strokeOpacity={0.05} />
                        <XAxis dataKey="month" tick={{fontSize:12, fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} />
                        <YAxis tick={{fontSize:12, fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false}/>
                        <Tooltip content={<CustomTooltip />}/>

                        <Area type="monotone" dataKey="amount" stroke='var(--color-chart-2)' fill="url(#incomeGradient)" strokeWidth={2} dot={{r:4, fill:"var(--color-chart-1)", strokeWidth:2, stroke:"var(--color-card)"}} activeDot={{r:6, strokeWidth:0}} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }

    export default CustomLineChart
