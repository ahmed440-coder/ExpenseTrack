import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import { LuImage, LuX} from 'react-icons/lu'
const EmojiPickerPopup = ({icon, onSelect}) => {
    const [isOpen,setIsOpen] = useState(false);
    return (
    <div className='flex flex-col md:flex-row items-center gap-5 mb-6'>
        <div className='flex items-center gap-4 cursor-pointer'
        onClick={() => setIsOpen(true)}>
        <div className='w-12 h-12 flex items-center justify-center text-2xl bg-[var(--color-background)] text-[var(--color-text-secondary)] rounded-lg'>
            {icon ? (<img src={icon} alt='icon' className='w-10 h-10 object-contain'/>) : (<LuImage/>)}
        </div>
        <p className='text-sm font-medium text-[var(--color-text-secondary)]'>{icon ? "Change Icon" : "Pick Icon"}</p>
    </div>
    {isOpen && (
        <div className='relative'>
            <button className='w-7 h-7 flex items-center justify-center bg-[var(--color-card)] text-[var(--color-text-primary)] rounded-full shadow-md absolute -top-2 -right-2 z-10 cursor-pointer transition-all hover:scale-110 active:scale-90'
            onClick={()=>setIsOpen(false)}>
                <LuX/>
            </button>
            <EmojiPicker
            open={isOpen}
            onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || "")}
            />
        </div>
      )}
    </div>
  )
}

export default EmojiPickerPopup
