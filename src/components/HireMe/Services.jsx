import React from 'react'

const Services = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10'>
            <div className='bg-primary-dark/10 p-6 rounded-xl border border-primary-dark/20'>
                <h3 className='text-xl font-semibold mb-3 text-primary-dark'>Full-Stack Development</h3>
                <p className='text-gray-400'>End-to-end web applications with modern technologies, scalable architectures, and clean code.</p>
            </div>
            <div className='bg-secondary-dark/10 p-6 rounded-xl border border-secondary-dark/20'>
                <h3 className='text-xl font-semibold mb-3 text-secondary-dark'>API Development</h3>
                <p className='text-gray-400'>Robust RESTful APIs that power your applications efficiently.</p>
            </div>
        </div>
    )
}

export default Services