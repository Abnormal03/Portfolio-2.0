import MiniProjects from '../components/Work/MiniProjects';
import SelectedWorks from '../components/Work/SelectedWorks';
import SchoolProjects from '../components/Work/SchoolProjects';

const Works = () => {
    return (
        <div className='h-fit text-white w-full bg-linear-to-br from-neutral-dark/90 to-neutral-dark p-5 overflow-hidden'>
            <SelectedWorks />
            <p className='text-gray-400 hidden lg:block my-5 text-sm'>Note: The links will take you to a github repository where everythings is. feel free to <span className='text-ternary-dark underline cursor-pointer'>get in touch.</span></p>

            <MiniProjects />

            <SchoolProjects />
        </div>
    )
}

export default Works