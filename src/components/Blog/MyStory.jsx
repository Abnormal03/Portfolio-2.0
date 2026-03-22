import React from 'react'

const MyStory = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            <div className='bg-primary-dark rounded-sm  h-fit max '>
                <h1 className='font-bold text-4xl bg-neutral-dark ml-1 pl-2 py-2'>My Story</h1>
            </div>

            <div className='col-span-2'>
                <div className='flex flex-col gap-5 text-gray-400 mt-3'>
                    <p>I didn't start with a master plan. Like most students, I was lost, hearing everyone complain about how their majors were "the worst." One night, my friends all claimed they wanted to be software engineers. Not wanting to be the only one without a clue, I said it too: <span className='text-white font-bold'>"I'm going to be a software engineer."</span> </p>

                    <p className='text-sm'>That "lie" became my reality. We all started in pre-engineering, but when the odds of actually getting into the software department hit a 5% survival rate, I didn't wait around. I transfered to <span className='font-bold text-white'>Information Systems {"(IS)"}</span> , and it was the best move I ever made.

                        What started as following my friends turned into a genuine obsession with code. Today, I'm not just saying I'm a developer—I'm building full-stack MERN apps and mobile projects with React Native. I might have stumbled into tech, but I'm staying because <span className='font-bold text-white'>I love the build.</span> </p>
                </div>

                <div className='grid grid-cols-2 justify-center  items-center'>
                    <div className='min-h-25 flex flex-col items-center justify-center '>
                        <p className='text-primary-dark text-sm'>LOCATION</p>
                        <h1 className='text-sm'>Addis Ababa, Ethiopia</h1>
                    </div>
                    <div className='min-h-25 flex flex-col items-center justify-center '>
                        <p className='text-primary-dark text-sm'>STATUS</p>
                        <h1 className='flex items-center gap-2 text-sm'> <p className='p-1 rounded-lg bg-ternary-dark w-fit'></p> Availbale</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStory