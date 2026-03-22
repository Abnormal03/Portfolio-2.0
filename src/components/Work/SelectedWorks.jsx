import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const selectedProjects = [
    {
        _id: "1",
        type: "MERN Stack Development",
        year: "2025",
        title: "Tech Gear - E-Commerce",
        imageLink: "src/assets/TechGear.png",
        description: "This is an e-commerce app specifically a p2p where users can sell thier items to other peer and also they can buy other products.",
        category: "completed",
        link: ""
    },
    {
        _id: "2",
        type: "MERN Stack Development",
        year: "2026",
        title: "Stock Pulse - Stock Portfolio",
        imageLink: "src/assets/StockPulse.png",
        description: "This project is under development and it have an essential features like viewing a daily chart, buying and selling stocks and more.",
        category: "Under-Development",
        link: ""
    },
]
const SelectedWorks = () => {
    return (
        <>
            <h1 className='text-4xl font-bold mt-10 animate-swipe delay-100 '>SELECTED WORKS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center my-5 gap-5'>
                {selectedProjects.map(project => (

                    <div key={project._id} style={{ backgroundImage: `url(${project.imageLink})` }} className={`relative bg-cover bg-center rounded-lg p-10 h-100 flex flex-col justify-end mask-[linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] hover:scale-105 transition-all duration-300 animate-swipe`}>
                        <p className='flex items-center gap-1 text-sm text-ternary-dark text-center'>{project.type}<span className='w-1 h-1 bg-ternary-dark rounded-sm'></span> 2025</p>
                        <h1 className='font-bold text-2xl'>{project.title}</h1>
                        <p className='text-gray-300'>{project.description}</p>
                        <a href={project.link} target='_blank' className='flex items-center gap-3 w-fit px-2 rounded-lg py-2 text-ternary-dark mt-2 hover:bg-ternary-dark hover:text-neutral-dark transition-all duration-600' >View Project  <FaArrowRight /></a>

                        <p className={`absolute top-5 right-2 ${project.category === "Under-Development" ? "bg-primary-dark/50" : "bg-ternary-dark/50"}  px-3 rounded-2xl`}>{project.category}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SelectedWorks