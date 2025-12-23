import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const Input = ({value, onChange, placeholder, label, type}) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div>
      <label className='text-sm text-[var(--color-text-secondary)] font-medium mb-1.5 block'>{label}</label>
      <div className='input-box focus-within:ring-2 focus-within:ring-[#4A4E69]/20 transition-all'>
        <input 
        type={type == 'password' ? showPassword ? 'text' : 'password' : type}
        placeholder={placeholder}
        className='w-full outline-none bg-transparent text-[var(--color-text-primary)]'
        value={value}
        onChange={(e)=>{onChange(e)}}
        />

        {type=== "password" && (
            <>
            {showPassword ? (<FaRegEye size={20} className='text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors' 
            onClick={() => toggleShowPassword()}
            />
        ) : (
            <FaRegEyeSlash 
            size={20}
            className='text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors'
            onClick={() => toggleShowPassword()}
            />
        )}
        </>
        )}
      </div>
    </div>
  )
}

export default Input
