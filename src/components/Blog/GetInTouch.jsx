import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

const GetInTouch = () => {
    return (
        <div className='w-full bg-primary-dark/10 p-5 rounded-xl flex flex-col items-center gap-5'>
            <h1 className='font-bold text-5xl lg:text-7xl max-w-190 text-center'>Let's build something <span className='bg-linear-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent'>extraordinary</span> together</h1>
            <div className='flex flex-col gap-5 lg:flex-row items-center lg:gap-10 '>
                <button className=' text-neutral-dark bg-linear-to-r from-secondary-dark to-primary-dark px-4 rounded-3xl py-2 hover:shadow-lg shadow-primary-dark hover:scale-105 transition-all duration-1000'>Get in Touch</button>
                <a href='mailto:abrhamteshe321@gmail.com' target='_blank' className='flex items-center gap-2 text-gray-300'><FaRegMessage className='text-ternary-dark' /> abrhamteshe321@gmail.com</a>
            </div>
        </div>
    )
}

export default GetInTouch