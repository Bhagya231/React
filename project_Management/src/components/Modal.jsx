import { createPortal } from "react-dom"


export default function modal({children,buttonCaption, ref})
{
    
    return createPortal(
        <dialog ref={ref} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg backdrop:bg-black/50">
            {children}
            <form method="dialog" className="mt-4 text-center">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
}