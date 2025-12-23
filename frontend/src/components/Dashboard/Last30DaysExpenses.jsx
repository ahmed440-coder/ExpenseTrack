import { useEffect, useState } from 'react'
import { prepareLast30DaysExpenseByCategory } from '../../utils/helper';
import CustomBarChart from '../charts/CustomBarChart';
const Last30DaysExpenses = ({data}) => {

    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const result = prepareLast30DaysExpenseByCategory(data);
        setChartData(result);
    }, [data]);
  return (
    <div className='card col-span-1'>
      <div className='flex items-center justify-between'>
          <h5 className='text-lg font-medium text-primary'>Last 30 Days Expenses</h5>
      </div>
      <CustomBarChart data={chartData} />
    </div>
  )
}

export default Last30DaysExpenses