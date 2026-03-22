import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='pb-10 lg:pb-5 px-5 lg:px-10 flex flex-col md:flex-row md:justify-between bg-neutral-dark text-gray-500 items-center'>
            <p className='flex items-center text-sm'><FaRegCopyright /> 2025-26 Abrham Teshome. All rights reserved.</p>
            <div className='flex gap-2 lg:gap-5'>
                <p><a href="https://github.com/Abnormal03">GitHub</a></p>
                <p><a href="www.linkedin.com/in/abrham-teshome-ea6203">LinkedIn</a></p>
                <p><a href="https://t.me/NormalAb321">Telegram</a></p>
                <p><a href="">Instagram</a></p>
            </div>
        </div>
    )
}

export default Footer