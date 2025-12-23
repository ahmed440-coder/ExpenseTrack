import { addThousandsSeparator } from '../../utils/helper';

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length){
  return (
    <div className='bg-card-base shadow-xl rounded-lg p-3 border-none transition-colors duration-300'>
      <p className='text-xs font-medium text-secondary mb-1'>{payload[0].name}</p>
      <p className='text-sm font-semibold text-primary'>
        ${addThousandsSeparator(payload[0].value)}
      </p>
    </div>
  )
}}

export default CustomTooltip;
