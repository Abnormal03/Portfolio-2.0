import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate();
    return (
        <div className='text-white lg:gap-20 lg:grid grid-cols-2 mt-5 lg:px-5 lg:p-0 items-center px-3'>
            <div className='lg:mx-10'>
                <div className=' flex items-center gap-2 bg-primary-dark/20 w-fit mb-2 rounded-2xl'>
                    <p className='w-2 h-2 bg-ternary-dark rounded-sm'></p>
                    <p className='text-sm'>AVAILABLE FOR NEW PROJECT</p>
                </div>
                <h1 className='font-bold text-5xl lg:text-7xl mb-5'>Hi, I'm <span className='bg-clip-text text-transparent bg-linear-to-r from-primary-dark to-secondary-dark'>Abrham</span>,<br /> Full-Stack Developer.</h1>
                <p className='text-gray-500 mb-5'>An Information Systems student and developer. I turn ideas into functional, production-ready code, focusing on utility-first styling and robust API architectures that scale with your users.</p>
                <div className='flex gap-3'>
                    <button className=' text-neutral-dark bg-linear-to-r from-secondary-dark to-primary-dark px-4 rounded-3xl py-2 hover:shadow-lg shadow-primary-dark hover:scale-105 transition-all duration-1000' onClick={() => navigate('/works')}>View Work</button>
                    <button className=' text-white bg-neutral-dark px-4 rounded-3xl py-2 hover:scale-105 transition-all duration-1000' onClick={() => navigate('/blog')}>Read More</button>
                </div>
            </div>
            <div>
                <img src="src/assets/portfolioImage.png" alt="" className='mt-5 rounded-t-3xl lg:h-150 mask-[linear-gradient(to_bottom,black_90%,transparent_100%)]' />
            </div>
        </div>
    )
}

export default Intro