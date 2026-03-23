import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import extensionManager from '../../assets/ExtensionManager.png'
import portfolioImage from '../../assets/Portfolio.avif'
import blogCard from '../../assets/BlogCard.png'
import foodDiscovery from '../../assets/FoodDiscovery.avif'

const miniProjects = [
    {
        _id: "1",
        type: "Web Development (React)",
        year: "2024",
        title: "Extension Manager",
        imageLink: extensionManager,
        description: "This was kinda my first website using React, It is an Extension manager where you can active and diactivate an extension.",
        category: "completed",
        link: "https://github.com/Abnormal03/Extension-Manager"
    },
    {
        _id: "2",
        type: "Web Development",
        year: "2024",
        title: "Personal Portfolio 1.0",
        imageLink: portfolioImage,
        description: "I created thsi portfolio while I was learning the essentials. It showcase the projects I did in school.",
        category: "completed",
        link: "https://github.com/Abnormal03/Portfolio"
    },
    {
        _id: "3",
        type: "Web Development",
        year: "2023",
        title: "Blog Card - Preview",
        imageLink: blogCard,
        description: "This was a project challeng by some website. It is just a blog card that shows a reviews of peoples.",
        category: "completed",
        link: "https://github.com/Abnormal03/BlogCardPreviews"
    },
    {
        _id: "4",
        type: "Backend Development (API)",
        year: "2025",
        title: "Food Discovery",
        imageLink: foodDiscovery,
        description: "A backend where I stored a users favorite meals in the mobile app that i will develop with react native.",
        category: "completed",
        link: "https://github.com/Abnormal03/foodDiscovery"
    }
]

const MiniProjects = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold my-2 animate-swipe'>More Mini Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {miniProjects.map(project => (

                    <div key={project._id} style={{ backgroundImage: `url(${project.imageLink})` }} className={`bg-cover bg-center rounded-lg p-10 h-100 flex flex-col justify-end mask-[linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] relative hover:scale-105 transition-all duration-300 animate-swipe`}>
                        <p className='flex items-center gap-1 text-sm text-ternary-dark  text-center'>{project.type}<span className='w-1 h-1 bg-ternary-dark rounded-sm'></span> {project.year}</p>
                        <h1 className='font-bold text-2xl'>{project.title}</h1>
                        <p className='text-gray-300'>{project.description}</p>
                        <a href={project.link} target='_blank' className='flex items-center gap-3 w-fit px-2 rounded-lg py-2 text-ternary-dark mt-2 hover:bg-ternary-dark hover:text-neutral-dark transition-all duration-600' >View Project  <FaArrowRight /></a>

                        <p className='absolute top-5 right-2 bg-ternary-dark/50 px-3 rounded-2xl'>{project.category}</p>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default MiniProjects