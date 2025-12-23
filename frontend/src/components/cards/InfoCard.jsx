import React from 'react'

const InfoCard = ({icon, label, value, color}) => {
  return (
  <div className="flex gap-6 bg-[var(--color-card)] p-6 rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] will-change-transform">
    <div className={`w-14 h-14 shrink-0 md:w-14 md:h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full`}>
        {icon}
    </div>
    <div>
        <h6 className='text-sm text-secondary mb-1'>{label}</h6>
        <span className='text-[22px] font-medium text-primary'>${value}</span>
    </div>
  </div>
  )
}

export default InfoCard
