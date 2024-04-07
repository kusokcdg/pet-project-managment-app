export default function CreateProject() {
    return (
        <>
            <button>Cancel</button>
            <button>Save</button>
            <div>
                <p>
                    <label>title</label>
                    <input type="text" />
                </p>
                <p>
                    <label>description</label>
                    <textarea cols="30" rows="3"></textarea>
                </p>
                <p>
                    <label>due date</label>
                    <input type="date" />
                </p>

            </div >
        </>
    );
}