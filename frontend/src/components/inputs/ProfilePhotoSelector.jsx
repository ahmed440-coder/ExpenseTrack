import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'
const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            //update the image state
            setImage(file)
            //generate preview URL from the file
            if (previewUrl) URL.revokeObjectURL(previewUrl)
            const preview = URL.createObjectURL(file)
            setPreviewUrl(preview)
        }
    }
    const handleRemoveImage = () => {
        setImage(null)
        if (previewUrl) URL.revokeObjectURL(previewUrl)
        setPreviewUrl(null)
        if (inputRef.current) inputRef.current.value = ""
    }
    const onChooseFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current) {
        inputRef.current.click();
    }
}
    return (
        <div className='flex justify-center mb-6'>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className='hidden'
            />
            {!image ? (
                <div className='w-20 h-20 flex items-center justify-center bg-[var(--color-background)] rounded-full relative'>
                    <LuUser className='text-4xl text-[var(--color-text-secondary)]' />
                    <button
                        type='button'
                        className='w-8 h-8 flex items-center justify-center bg-[#4A4E69] text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer hover:bg-[#22223B] transition-colors shadow-md'
                        onClick={onChooseFile}
                    >
                        <LuUpload className='w-4 h-4'/>
                    </button>
                </div>
            ) : (
                <div className='relative'>
                    <img
                        src={previewUrl}
                        alt='profile photo'
                        className='w-20 h-20 rounded-full object-cover shadow-md'
                    />
                    <button
                        type='button'
                        className='w-8 h-8 flex items-center justify-center bg-rose-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer hover:bg-rose-600 transition-colors shadow-md'
                        onClick={handleRemoveImage}
                    >
                        <LuTrash className='w-4 h-4'/>
                    </button>
                </div>
            )}

        </div>
    )
}

export default ProfilePhotoSelector
