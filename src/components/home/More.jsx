import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const More = () => {
    const iconStyle = 'flex items-center gap-1 text-lg text-white px-3 py-2 bg-primary-dark/10 rounded-lg w-fit';
    return (
        <div className='text-white mt-20 z-40 bg-neutral-dark w-full h-fit -mx-3 lg:-mx-10 lg:p-10 px-5 animate-reveal delay-100'>
            <div className='lg:flex justify-between'>
                <div>
                    <p className='text-ternary-dark text-sm'>Expertise</p>
                    <h1 className='text-4xl font-bold'>My Skills</h1>
                </div>
                <p className='text-gray-400 text-sm my-3 max-w-100'>Specialized in building responsive and progressive website that is scalable as the your users.</p>
            </div>
            <div className='flex flex-wrap gap-1 items-center justify-center lg:justify-start mt-5'>
                <p className={iconStyle}> <IoLogoJavascript className='text-primary-dark' /> JavaScript</p>
                <p className={iconStyle}> <FaNodeJs className='text-primary-dark' />  Node</p>
                <p className={iconStyle}> <FaReact className='text-primary-dark' />  React</p>
                <p className={iconStyle}> <SiExpress className='text-primary-dark' /> Express</p>
                <p className={iconStyle}> <SiMongodb className='text-primary-dark' /> MongoDb</p>
                <p className={iconStyle}><TbBrandReactNative className='text-primary-dark' /> React Native</p>
                <p className={iconStyle}> <FaJava className='text-primary-dark' /> Java</p>
                <p className={iconStyle}> <SiCplusplus className='text-primary-dark' /> C++</p>
            </div>
        </div>
    )
}

export default More