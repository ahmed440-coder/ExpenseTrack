import React from 'react'
import CustomPieChart from '../charts/CustomPieChart';
import { addThousandsSeparator } from '../../utils/helper';
const FinanceOverview = ({totalBalance, totalExpense, totalIncome}) => {
    const colors = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"];

    const balanceData=[
        {name :"Total Balance", amount: totalBalance},
        {name : "Total Expenses" , amount: totalExpense},
        {name : "Total Income", amount:totalIncome}
    ];
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg font-medium text-primary'>Financial Overview</h5>
        </div>
        <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${addThousandsSeparator(totalBalance)}`}
        colors={colors}
        showTextAnchor
        />
    </div>
  )
}

export default FinanceOverview
