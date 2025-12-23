import React, { useState, useEffect } from 'react'
import { prepareExpenseLineChartData } from '../../utils/helper';
import CustomLineChart from '../../components/charts/CustomLineChart'
import { LuPlus } from 'react-icons/lu';

const ExpenseOverview = ({transactions, onExpenseIncome}) => {
    const [chartData, setChartData]=useState([]);

    useEffect(()=>{
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);

        return ()=>{};
    },[transactions])
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h5 className='text-xl font-medium text-primary'>Expense Overview</h5>
                    <p className='text-sm text-secondary mt-0.5'>
                        Track your spendings! and where your money goes overtime!
                    </p>
                </div>
                <button 
                className='card-btn' 
                onClick={onExpenseIncome}>
                    <LuPlus className='text-lg'/>
                        Add Expense
                </button>
            </div>
            <div className='mt-10'>
                <CustomLineChart data={chartData} />
            </div>
        </div>
    )
}

export default ExpenseOverview
