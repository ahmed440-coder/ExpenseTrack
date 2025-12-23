import React, { useEffect, useState } from 'react'
import CustomBarChart from '../charts/CustomBarChart'
import {LuPlus} from 'react-icons/lu'
import {prepareIncomeBarChartData} from '../../utils/helper'
const IncomeOverview = ({transactions, onAddIncome}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(()=>{
    const result =prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions])

  return (

    <div className='card'>
        <div className='flex items-center justify-between'>
          <div className=''>
            <h5 className='text-xl font-medium text-primary'>Income Overview</h5>
            <p className='text-sm text-secondary mt-0.5'>
              Track your earnings! analyze your income!
            </p>
          </div>

          <button
          className='card-btn'
          onClick={onAddIncome}>
            <LuPlus className='text-lg' />
              Add Income
          </button>
        </div>


        <div className='mt-10'>
          <CustomBarChart data={chartData} />
        </div>
    </div>
  )
}

export default IncomeOverview
