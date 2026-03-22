import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCodeBranch } from "react-icons/fa6";

const Header = () => {
    const style = ({ isActive }) => isActive ? "text-primary-dark underline decoration-2 underline-offset-10 transition-all duration-500" : "underline  decoration-transparent"
    return (
        <div className='flex gap-15 md:gap-0 justify-between items-center py-3 md:p-3 lg:px-10 bg-neutral-dark text-primary-dark text-lg'>
            <div className='flex font-bold text-2xl items-center gap-2'>
                <FaCodeBranch />
                <p>PORTFOLIO</p>
            </div>
            <nav className='fixed z-20 -bottom-0.5 w-screen lg:relative lg:bottom-0 flex justify-center gap-5 left-0 bg-neutral-dark rounded-t-lg py-2 items-center text-gray-500'>
                <NavLink className={style} to={'/'}>Intro</NavLink>
                <NavLink className={style} to={'/works'}>Works</NavLink>
                <NavLink className={style} to={'/blog'}>Blog</NavLink>
            </nav>
            <div className='min-w-fit'>
                <button className='text-neutral-dark bg-linear-to-r from-secondary-dark to-primary-dark px-2 rounded-3xl py-1 hover:shadow-lg shadow-primary-dark hover:scale-105 transition-all duration-1000'>Hire Me</button>
            </div>
        </div>

    )
}

export default Header