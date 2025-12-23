import React, { useState } from 'react'
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi';
import { LuMoon, LuSun } from 'react-icons/lu';
import SideMenu from './SideMenu'
const Navbar = ({activeMenu}) => {
    const [openSideMenu,setOpenSideMenu] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark')

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
    }

  return (
    <div className="flex items-center justify-between bg-card-base shadow-sm py-4 px-7 sticky top-0 z-30 transition-colors duration-300">
        <div className="flex items-center gap-5">
            <button
            className='block lg:hidden text-primary'
            onClick={()=>{
                setOpenSideMenu(!openSideMenu)
            }}
            >
                {openSideMenu ? (
                    <HiOutlineX className='text-2xl'/>
                ) : (
                    <HiOutlineMenu className='text-2xl'/>
                )}
            </button>
            <h2 className='text-lg font-semibold text-primary'>Expense Tracker</h2>
        </div>

        <div className="flex items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-bg-base text-secondary hover:text-primary transition-all cursor-pointer"
            >
                {isDarkMode ? <LuSun size={20} /> : <LuMoon size={20} />}
            </button>
        </div>

        {openSideMenu && (
            <div className='fixed top-[61px] left-0 w-64 bg-card-base h-full'>
                <SideMenu activeMenu={activeMenu}/>
            </div>
        )}
      
    </div>
  )
}

export default Navbar
