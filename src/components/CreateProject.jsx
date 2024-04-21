import { useRef } from "react";

export default function CreateProject({ onSave, onCancel }) {
    const title = useRef();
    const date = useRef();
    const description = useRef();

    let project = {
        title: '',
        date: '',
        description: ''
    }

    function handleSave() {
        project = {
            title: title.current.value,
            date: date.current.value,
            description: description.current.value
        }
        onSave(project);
    }

    return (
        <div className="px-4 pt-28 ml-64 grid">
            <div className="justify-self-end space-x-4 ">
                <button className="font-medium hover:text-red-800 "
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button className="w-28 py-2 px-4 text-neutral-500 bg-stone-900 rounded-md hover:bg-neutral-700"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block uppercase font-semibold ">Title</label>
                    <input className="w-full bg-stone-200 border-b-2 outline-0 focus:border-stone-800"
                        ref={title}
                        type="text"
                    />
                </div>
                <div>
                    <label className="block uppercase font-semibold">Description</label>
                    <textarea className="w-full bg-stone-200 border-b-2 outline-0 focus:border-stone-800"
                        cols="30"
                        rows="3"
                        ref={description}
                    ></textarea>
                </div>
                <div>
                    <label className="block uppercase font-semibold">Due date</label>
                    <input className="w-full bg-stone-200 border-b-2 outline-0 focus:border-stone-800"
                        type="date"
                        ref={date}
                    />
                </div>
            </div >
        </div>
    );
}