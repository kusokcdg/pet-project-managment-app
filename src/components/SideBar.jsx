export default function SideBar() {
    return (
        <aside className="fixed top-16 h-screen w-64 rounded-tr-[20px] bg-stone-900">
            <label className="relative uppercase left-8 top-8 font-sans text-2xl font-bold text-white ">Your projects</label>
            <button className="relative text-black bg-neutral-700 top-16 left-8  rounded-md py-2 px-4 hover:bg-neutral-600 hover:text-zinc-400 ">+ Add Project</button>

        </aside>
    );
}