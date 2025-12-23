/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import CustomPieChart from '../charts/CustomPieChart'


import { addThousandsSeparator } from '../../utils/helper'
const colors = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)"];
const RecentIncomeWithChart = ({data, totalIncome}) => {
    const [chartData, setChartData] = useState([]);
    const prepareChartData = () => {
        const dataArr = data?.map((item)=>({
            name:item?.source,
            amount:item?.amount,
        }));
        setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();
        return () => {};
    },[data]);
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg font-medium text-primary'>Last 60 Days Income</h5>
        </div>
        <CustomPieChart
            data={chartData}
            label="Total Income"
            totalAmount={`$${addThousandsSeparator(totalIncome)}`}
            showTextAnchor
            colors={colors}
            />
    </div>
  )
}

export default RecentIncomeWithChart
