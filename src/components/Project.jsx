import { forwardRef, useRef, useImperativeHandle } from 'react';

const Project = forwardRef(function Project({ prj, onAddTask }, ref) {
    const task = useRef();

    useImperativeHandle(ref, () => {
        return {
            add() {
                return task.current.value;
            },
            clear() {
                task.current.value = '';
            }
        }
    })

    return (
        <div className="px-6 pt-28 ml-64 ">

            <div className="flex justify-between">
                <p className="font-sans text-5xl font-bold"> {prj.title}</p>
                <button className=" mr-2 mt-6 hover:text-red-800 ">Delete</button>
            </div>
            <div>
                <p className="text-stone-400">{prj.date}</p>
                <p>{prj.description}</p>
            </div>
            <hr className="h-0.5 my-4 rounded-md bg-stone-900 border-x" />
            <p className="my-4 font-sans font-semibold text-3xl">Tasks</p>
            <div className="my-4">
                <input className="bg-stone-300 rounded focus:border-blue-500 "
                    type="text"
                    ref={task}
                />
                <button className="ml-4" onClick={onAddTask}>Add Task</button>
            </div>
            {/* <p className="mt-4">This project doesnt have any tasks yet.</p> */}
            <div className=" px-2 py-2 rounded bg-stone-200">
                <li className="flex justify-between my-4">
                    <p>Learning the basics</p>
                    <button className="hover:text-red-800">Clear</button>
                </li>
            </div>
        </div>
    );
})

export default Project;