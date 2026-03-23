import React from 'react'

import Contact from '../components/HireMe/Contact';
import Services from '../components/HireMe/Services';
import DirectContact from '../components/HireMe/DirectContact';

const HireMe = () => {

    return (
        <div className='h-fit text-white w-full bg-linear-to-br from-neutral-dark/90 to-neutral-dark p-5 overflow-hidden animate-swipe delay-150'>
            <div className='max-w-4xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-10'>
                    <h1 className='font-bold text-5xl lg:text-7xl mb-5 bg-clip-text text-transparent bg-linear-to-r from-primary-dark to-secondary-dark'>
                        Let's Work Together
                    </h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        I'm always excited to take on new challenges and collaborate on innovative projects.
                        Whether you need a full-stack application, or API development let's discuss how we can bring your ideas to life.
                    </p>
                </div>
                <Services />
                <Contact />
                <DirectContact />
            </div>
        </div>
    )
}

export default HireMe