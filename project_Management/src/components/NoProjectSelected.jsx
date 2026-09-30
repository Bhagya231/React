import noproject from '../assets/no-projects.png'
import Button from './Button.jsx'
export default function NoProjectSelected({onStartAddProject})
{
    return(
        <div className="flex flex-col text-center item-center">
            <img src={noproject} alt="no project selected" className="w-24 mb-4"/>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Project Selected</h2>
            <p className="text-gray-500 mb-4">Select a project or started with a new one</p>
            <p><Button onClick = {onStartAddProject}>Create new Project</Button></p>
        </div>
    )
}