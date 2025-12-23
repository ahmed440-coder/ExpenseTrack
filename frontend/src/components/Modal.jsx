import React from 'react'
import { HiOutlineX } from 'react-icons/hi';
const Modal = ({children, isOpen, onClose, title}) => {

  if (!isOpen) return null;
  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-sm'>
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        {/*content */}
        <div className='relative bg-[var(--color-card)] rounded-2xl shadow-2xl transition-all'>
            {/*header */}
            <div className='flex items-center justify-between p-6 border-b border-[var(--color-border)]'>
                <h3 className='text-lg font-medium text-primary'>
                    {title}
                </h3>
                <button
                type='button'
                className='text-secondary bg-transparent hover:bg-bg-base hover:text-primary rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center cursor-pointer transition-all'
                onClick={onClose}
                >
                    <HiOutlineX size={20} />
                </button>
            </div>
            {/*body */}
            <div className='p-6 text-primary'>
                {children}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
