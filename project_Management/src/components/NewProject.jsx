import Input from "./Input.jsx";
import { useRef } from 'react'
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel})
{

    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave()
    {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validations

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '')
        {
            modal.current.showModal();
            return;
        }

        onAdd({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate
        })
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2>Invalid Input</h2>
            <p>Oops... looks like you forgot to enter a value.</p>
            <p>Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-full max-w-xl">
            <menu className="flex justify-center gap-3 p-6 mb-6">
                <li><button className="px-4 py-2 text-gray-600 hover:text-gray-900"  onClick={onCancel}>Cancel</button></li>
                <li><button onClick={handleSave} className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700">Save</button></li>
            </menu>
            <div className="space-y-5">
              <Input type="text" ref={title} label="Title" />
              <Input ref={description} label="Description" textarea />
              <Input type="date" ref={dueDate} label="Due Date" />
              
            </div>
        </div>
        </>
    )
}