import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[var(--color-background)] relative overflow-hidden transition-colors duration-300'>
        {/* Subtle background shapes */}
        <div className='absolute top-0 left-0 w-80 h-80 bg-[#C9ADA7] dark:bg-[#4A4E69] rounded-full filter blur-3xl opacity-30'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-[#9A8C98] dark:bg-[#22223B] rounded-full filter blur-3xl opacity-20'></div>
        
        <div className='w-full max-w-md px-6 relative z-10'>
            <div className='card py-10 px-8'>
                <h2 className='text-2xl font-semibold text-[var(--color-text-primary)] text-center mb-6'>Expense Tracker</h2>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout
const StatsInfoCard = ({icon, label, value, color}) => {
    return (
        <div className='flex gap-4 bg-white p-4 rounded-xl shadow-md shadow-pruple-500/10 border border-gray-200 z-10'>
            <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-2xl`}>
                {icon}
            </div>
            <div>
                <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
                <span className='text-[20px]'>${value}</span>
            </div>
        </div>
    )
}