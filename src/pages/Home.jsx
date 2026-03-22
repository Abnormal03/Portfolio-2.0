import React from 'react'
import Intro from '../components/home/Intro'
import More from '../components/home/More'

const Home = () => {
    return (
        <div className='pt-3 w-full lg:pt-5 lg:px-10 text-gray-500 bg-linear-to-br from-neutral-dark/90  to-neutral-dark h-fit'>
            <Intro />
            <More />
        </div>
    )
}

export default Home