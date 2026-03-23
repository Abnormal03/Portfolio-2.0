import React from 'react'
import { FaRegMessage, FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa6";

const DirectContact = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl font-bold mb-4'>Prefer Direct Contact?</h2>
            <p className='text-gray-400 mb-6'>Feel free to reach out directly via email or social media</p>
            <div className='flex flex-col items-center gap-4'>
                <a
                    href='mailto:abrhamteshe321@gmail.com'
                    className='flex items-center gap-3 text-gray-300 hover:text-primary-dark transition-colors text-lg'
                >
                    <FaRegMessage className='text-ternary-dark' />
                    abrhamteshe321@gmail.com
                </a>
                <div className='flex gap-6 mt-4'>
                    <a href="https://github.com/Abnormal03" target='_blank' className='text-ternary-dark hover:text-primary-dark hover:scale-105 transition-all duration-500'>
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/abrham-teshome-ea6203" target='_blank' className='text-ternary-dark hover:text-primary-dark hover:scale-105 transition-all duration-500'>
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://t.me/NormalAb321" target='_blank' className='text-ternary-dark hover:text-primary-dark hover:scale-105 transition-all duration-500'>
                        <FaTelegram size={30} />
                    </a>
                    <a href="https://www.instagram.com/abn_ormal321/" className='text-ternary-dark hover:text-primary-dark hover:scale-105 transition-all duration-500'>
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DirectContact