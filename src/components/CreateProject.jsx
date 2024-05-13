import { useState, useRef } from "react";

const CreateProject = ({ onSave, onCancel, onCheckDuplicate }) => {
    const [messageError, setMessageError] = useState('');
    const title = useRef();
    const date = useRef();
    const description = useRef();

    function handleSave() {
        const inputTitle = title.current.value.trim();
        const inputDescription = description.current.value.trim();
        const inputDate = date.current.value.trim();
        let validError = "";

        if (inputTitle.length == 0) validError += "The title cant be empty.\n";
        if (inputTitle.length > 50) validError += "The title is too long.\n";
        if (inputDescription.length > 200) validError += "The description is too long.\n";
        if (inputDate == 0) validError += "Date not selected.\n";
        if (onCheckDuplicate(inputTitle)) validError += `Project "${inputTitle}" already exists.`;

        validError.length !== 0 ? setMessageError(validError) :
            onSave({
                title: title.current.value,
                date: date.current.value,
                description: description.current.value
            })
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
            <div className="py-2 whitespace-pre-line text-red-800">
                {messageError}
            </div>
        </div>
    );
}

export default CreateProject;