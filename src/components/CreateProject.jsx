export default function CreateProject() {
    return (
        <div className="px-4 pt-28 ml-64 grid">
            <div className="justify-self-end space-x-4 ">
                <button className="font-medium hover:text-red-800 ">Cancel</button>
                <button className="w-28 py-2 px-4 text-neutral-500 bg-stone-900  rounded-md  hover:bg-neutral-700 ">Save</button>
            </div>
            <div className="space-y-4">
                <div className="mb-6">
                    <label className="block uppercase font-semibold ">Title</label>
                    <input className="w-full bg-stone-200  outline-0 focus:border-b-2 border-stone-800" type="text" />
                </div>
                <div>
                    <label className="block uppercase font-semibold">Description</label>
                    <textarea className="w-full bg-stone-200  outline-0 focus:border-b-2 border-stone-800" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <label className="block uppercase font-semibold">Due date</label>
                    <input className="w-full bg-stone-200  outline-0 focus:border-b-2 border-stone-800" type="date" />
                </div>
            </div >
        </div>
    );
}