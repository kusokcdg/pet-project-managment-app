import logo from '../assets/no-projects.png';

export default function Entry({onAddPrj}) {
    return (
        <div className="p-4 ml-64 mt-28 ">
            <div className=' py-2 px-4 flex flex-col items-center justify-center'>
                <img src={logo} alt="picture" className='h-28 w-28 mx-auto' />
                <div className='p-4 font-sans text-2xl font-bold'>
                    No Project Selected
                </div>
                <div className=' text-zinc-400'>
                    Select a project or get started with a new one
                </div>
                <button className="mt-8 py-2 px-4 text-neutral-500 bg-stone-900  rounded-md  hover:bg-neutral-700 "
                onClick={onAddPrj}
                >
                    Create new project
                </button>
            </div>



        </div>
    );
}