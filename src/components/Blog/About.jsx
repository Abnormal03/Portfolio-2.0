import React from 'react'

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center h-fit gap-20 lg:gap-0 mb-20'>
            <div className='self-end'>
                <p className='font-light text-sm text-ternary-dark'>THE ARCHITECT OF DESIGN SCIENCE</p>
                <h1 className='font-bold text-6xl lg:text-8xl'>About <span className='text-primary-dark italic'>Me</span></h1>
            </div>

            <div className='md:m-5 mb-0 lg:p-5'>
                <img src="src/assets/portfolioImage.png" alt="" className='lg:max-h-200 rounded-lg lg:rounded-4xl mask-[linear-gradient(to_bottom,black_90%,transparent_100%)]' />
            </div>
        </div>
    )
}

export default About