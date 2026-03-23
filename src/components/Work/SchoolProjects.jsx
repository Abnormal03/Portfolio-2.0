import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const schoolProjects = [
    {
        _id: "1",
        type: "Object Oriented Programming",
        year: "2024",
        title: "Job for All",
        imageLink: "src/assets/JobForAll.jpg",
        description: "The project was assigned to us by our object oriented programming teacher. It is a JAVA GUI application for Seek and Hire platform.",
        category: "School Project",
        link: ""
    },
    {
        _id: "2",
        type: "IRS (Python)",
        year: "2024",
        title: "Information Retrieval System",
        imageLink: "src/assets/ISR.avif",
        description: "This School project was to demonstrate how the search engines like google works on behind like processing and exracting a keywords.",
        category: "School Project",
        link: ""
    },
    {
        _id: "3",
        type: "Networking",
        year: "2025",
        title: "Network Design and Implementation",
        imageLink: "src/assets/Network.avif",
        description: "This is just to show that I have a contribution on the network design and implementation on a building and campus network located in our university 4k campus.",
        category: "School Project",
        link: ""
    },
]

const SchoolProjects = () => {
    return (
        <>
            <p className='font-bold text-3xl'>School Projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {schoolProjects.map(project => (

                    <div key={project._id} style={{ backgroundImage: `url(${project.imageLink})` }} className={`relative bg-center bg-cover rounded-lg p-10 h-100 flex flex-col justify-end mask-[linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] hover:scale-105 transition-all duration-300`}>
                        <p className='flex items-center gap-1 text-sm text-ternary-dark text-center'> {project.type} <span className='w-1 h-1 bg-ternary-dark rounded-sm'></span> {project.year}</p>
                        <h1 className='font-bold text-2xl'>{project.title}</h1>
                        <p className='text-gray-300'>{project.description}</p>
                        {project.link && <a href={project.link} target='_blank' className='flex items-center gap-3 w-fit px-2 rounded-lg py-2 text-ternary-dark mt-2 hover:bg-ternary-dark hover:text-neutral-dark transition-all duration-600' >View Project  <FaArrowRight /></a>}

                        <p className='absolute top-5 right-2 bg-secondary-dark/50 px-3 rounded-2xl'>School Project</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SchoolProjects