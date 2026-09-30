import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import SelectedProject from './components/SelectedProject.jsx'

function App() {
  
  const [projectState, setProjectState] = useState({
      selectedProjectId : undefined ,
      projects: [],
      tasks:[]
  });

  function handleAddTask({text})
  {
    setProjectState((prevState) =>{
      const taskId = Math.random();
      const newTask ={
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks:[newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
        return {
            ...prevState,
            tasks: prevState.tasks.filter(
                (task) => task.id !== taskId
            )
        };
    });
}
  function handleStartAddProject()
  {
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId : null,
      }
    })
  }

  function handleCancelAddProject()
  {
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId : undefined,
      }
    })
  }

  function handleSelectproject(id)
  {
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId : id,
      }
    })
  }


  function handleAddProject(projectData)
  {
    setProjectState(prevState => {
      const newProject = {
      ...projectData,
      id: Math.random()
    }
      return{
        ...prevState,
        selectedProjectId : undefined,
        projects: [...prevState.projects,newProject]
      }
    })
  }

  function handleDeleteProject()
  {
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      }
    })
  }


  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId );
  const selectedProjectTasks = projectState.tasks.filter((task) => task.projectId === projectState.selectedProjectId);

  let content = (<SelectedProject project={selectedProject} onDeleted ={handleDeleteProject} onAddTask = {handleAddTask} onDeleteTask ={handleDeleteTask}
        tasks ={selectedProjectTasks}/>);

  if(projectState.selectedProjectId === null)
  {
    content = <NewProject onAdd={handleAddProject} onCancel ={handleCancelAddProject} />

  }else if(projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject} />
  }

  console.log(projectState);

  return (
    <main className='min-h-screen p-8  flex gap-8'>
       <Sidebar  onStartAddProject = {handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectproject} selectedProjectId={projectState.selectedProjectId}/>
       {content}
       {/* <NewProject /> */}
       {/* <NoProjectSelected onStartAddProject = {handleStartAddProject} /> */}
    </main>
  )
}

export default App
