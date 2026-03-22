import React from 'react'
import About from '../components/Blog/About'
import MyStory from '../components/Blog/MyStory'
import GetInTouch from '../components/Blog/GetInTouch'

const Blog = () => {
    return (
        <div className='h-fit text-white w-full bg-linear-to-br from-neutral-dark/90 to-neutral-dark p-5 overflow-hidden'>
            <About />
            <MyStory />
            <GetInTouch />
        </div>
    )
}

export default Blog