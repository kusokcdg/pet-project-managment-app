import { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

const Project = forwardRef(function Project({ prj, onAddTask, onDeleteTask, onDeleteProject }, ref) {
    const [messageError, setMessageError] = useState('');
    const inputTask = useRef(null);
    const dialog = useRef(null);
    const tasksIsEmpty = prj.tasks.length === 0 ? true : false;

    useImperativeHandle(ref, () => {
        return {
            add() {
                return inputTask.current.value;
            },
            clear() {
                inputTask.current.value = '';
            }
        }
    });

    function validationTask(inputTask) {
        inputTask = inputTask.trim();
        let validError = '';

        if (inputTask.length == 0) validError += 'The task cant be empty.';
        if (inputTask.length > 70) validError += 'The task is too long.';
        if (prj.tasks.find(task => task === inputTask)) validError += `Task "${inputTask}" already exists.`;

        setMessageError(validError);
        return validError;
    }

    return (
        <>
            {createPortal(
                <dialog ref={dialog} className='rounded-lg'>
                    <div className='relative p-4 grid grid-cols-2 justify-items-center gap-y-6'>
                        <span className='col-span-2'>Do you really want to delete the "{prj.title}" project?</span>
                        <button className='py-2.5 px-5 text-sm rounded-lg border border-gray-200 hover:bg-gray-100' onClick={() => { onDeleteProject(prj.title) }} >Yes</button>
                        <button className='py-2.5 px-5 text-sm rounded-lg border border-gray-200 hover:bg-gray-100' onClick={() => { dialog.current.close() }}>No</button>
                    </div>
                </dialog>,
                document.getElementById("modal-root"))
            }
            <div className="px-6 pt-28 ml-64 flex flex-col space-y-4">
                <div className="flex justify-between">
                    <span className="font-sans text-5xl font-bold"> {prj.title}</span>
                    <button className=" mr-2 mt-6 hover:text-red-800 "
                        onClick={() => { dialog.current.showModal() }}>
                        Delete
                    </button>
                </div>
                <span className="text-stone-400">{prj.date}</span>
                <span className='whitespace-pre-line'>{prj.description}</span>

                <hr className="h-0.5 rounded-md bg-stone-900 border-x" />

                <span className="font-sans font-semibold text-3xl">Tasks</span>
                <div className="">
                    <input className="bg-stone-300 rounded focus:border-blue-500 "
                        type="text"
                        ref={inputTask}
                    />
                    <button className="ml-4" onClick={() => { if (!!!validationTask(inputTask.current.value)) onAddTask(prj.title) }}>Add Task</button>
                </div>

                {tasksIsEmpty ? <span >This project doesnt have any tasks yet.</span> :
                    <>
                        <ul className=" px-2 py-2 rounded bg-stone-200">
                            {prj.tasks.map(task =>
                                <li key={`${task}`} className="flex justify-between my-4">
                                    <span>{task}</span>
                                    <button className="hover:text-red-800"
                                        onClick={() => { onDeleteTask(prj.title, task) }}>
                                        Clear
                                    </button>
                                </li>)}
                        </ul>
                        <div className="py-2 whitespace-pre-line text-red-800">
                            {messageError}
                        </div>
                    </>
                }
            </div>
        </>
    );
})

export default Project;