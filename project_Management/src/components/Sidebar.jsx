import Button from "./Button.jsx";

export default function Sidebar({onStartAddProject, projects, onSelectProject,selectedProjectId })
{
    return(
        <aside className="w-64 rounded-lg bg-gray-100 p-6 ">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Your Projects</h2>
            <div>
                <Button onClick = {onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-6 space-y-1">
                {projects.map((project) =>{
                    const buttonStyle =  project.id === selectedProjectId ?  'w-full text-left px-2 py-1 rounded my-1 bg-gray-800 text-white  ':'w-full text-left px-3 py-2 rounded text-gray-700 hover:bg-gray-200';
                    
                    return(
                        <li key={project.id}>
                        <button onClick={ () => onSelectProject(project.id)} className= {buttonStyle}>
                        {project.title}</button></li>
                    );

})}
            </ul>
        </aside>
    );
}