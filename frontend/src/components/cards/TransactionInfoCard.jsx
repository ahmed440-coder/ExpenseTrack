import React from 'react'
import { LuUtensils, LuTrendingUp, LuTrendingDown, LuTrash2 } from 'react-icons/lu'
import { addThousandsSeparator } from '../../utils/helper'
const TransactionInfoCard = ({
                    title,
                    icon,
                    date,
                    amount,
                    type,
                    hideDeleteBtn,
                    onDelete
}) => {
  const getAmountStyles = () =>
    type === "income" 
        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-300/20 dark:text-emerald-400" 
        : "bg-rose-50 text-rose-600 dark:bg-rose-300/20 dark:text-rose-400";
  
  return (
    <div className='group relative flex items-center gap-4 mt-2 p-3 rounded-xl hover:bg-[var(--color-background)] transition-colors duration-200'>
      <div className='w-12 h-12 flex items-center justify-center text-xl text-[var(--color-text-primary)] bg-[var(--color-background)] rounded-full'>
        {icon ? (<img src={icon} alt={title} className='w-6 h-6 ' />
        ) : (<LuUtensils />)}
      </div>
      <div className='flex-1 flex items-center justify-between'>
        <div>
          <p className='text-sm text-[var(--color-text-primary)] font-medium'>{title}</p>
          <p className='text-xs text-[var(--color-text-secondary)] mt-1'>{date}</p>
        </div>
        <div className='flex items-center gap-2'>
          {!hideDeleteBtn && (
            <button className='text-[var(--color-text-secondary)] hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-all cursor-pointer'
            onClick={onDelete}><LuTrash2 size={18}/> </button>
          )}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${getAmountStyles()} transition-colors`}>
            <h6 className='text-sm font-semibold '>
              {type === 'income' ? "+" : "-"} ${addThousandsSeparator(amount)}
            </h6>
            {type === 'income' ? <LuTrendingUp size={16}/> : <LuTrendingDown size={16}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionInfoCard
