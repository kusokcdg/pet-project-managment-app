export default function SideBar({isDisable, onAddPrj }) {
    return (
        <aside className="fixed top-16 h-screen w-64 rounded-tr-[20px] bg-stone-900">
            <label className="relative uppercase left-8 top-8 font-sans text-2xl font-bold text-white ">Your projects</label>
            <button className="relative text-zinc-500 bg-neutral-700 top-16 left-8  rounded-md py-2 px-4 hover:bg-neutral-600"
                onClick={onAddPrj}
                disabled={isDisable}
            >
                + Add Project
            </button>





            <ul className="flex flex-col break-words  relative top-16 p-8 space-y-4  text-zinc-500 ">
                <li>
                    <button className="text-left w-full pl-2 py-1 rounded-sm hover:bg-neutral-600 hover:text-stone-300"
                        disabled={isDisable}
                    >
                        ASDtitle1
                    </button>
                </li>
                <li>
                    <button className="text-left w-full pl-2 py-1 rounded-sm hover:bg-neutral-600 hover:text-stone-300">The longest word in any of the major English language dictionaries is asdasdasdasldjaslkdjaslda;smda;lskda;lksa</button>
                </li>
                <li>
                    <button className="text-left w-full pl-2 py-1 rounded-sm hover:bg-neutral-600 hover:text-stone-300">title2</button>
                </li>
            </ul>
        </aside>
    );
}