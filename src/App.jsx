import { useState, useRef } from "react";

import SideBar from "./components/SideBar";
import Entry from "./components/Entry";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

const TEMP = [
  {
    title: "Vacation",
    date: "2024-05-09",
    description: "Tracking the tasks I’ll be doing on vacation.",
    tasks: ['Learn React','Visit Grodno','Introduce girlfriend to parents']
  }
];

function App() {
  const [projects, setProjects] = useState(TEMP);
  const [selectedProject, setSelectedProject] = useState(TEMP[0]);

  const [isAddPrj, setIsAddPrj] = useState(false);  
  const taskProject = useRef(null);

  function handleAddPrj() {
    setIsAddPrj(!isAddPrj);
    setSelectedProject(undefined);
  }

  function handleCreateProject(objPrj) {
    setProjects((prevProjects) => {
      objPrj.tasks = [];
      const updatedProjects =
        [...prevProjects,
          objPrj
        ];

      return updatedProjects;
    });
    setIsAddPrj((isAddPrj) => !isAddPrj);
  }

  function handleCancelCreateProject() {
    setIsAddPrj((isAddPrj) => !isAddPrj);
  }

  function handleChooseProject(createdProjects, chooseTitle) {
    setSelectedProject(createdProjects.find(
      project =>  project.title === chooseTitle));
  }

  function handleAddTask(keyTitle) {
    const newTask = taskProject.current.add();
    taskProject.current.clear();

    setProjects(prevProjects =>
      [...prevProjects.map(project => project.title === keyTitle ? { ...project, tasks: [...project.tasks, newTask] } : project)])

    setSelectedProject(prevProject => ({ ...prevProject, tasks: [...prevProject.tasks, newTask] }));
  }

  function handleDeleteTask(keyTitle, selectedTask) {
    setProjects(prevProjects =>
      [...prevProjects.map(project => project.title === keyTitle ? { ...project, tasks: project.tasks.filter(element => (element !== selectedTask)) } : project)])

    setSelectedProject(prevProject => ({ ...prevProject, tasks:prevProject.tasks.filter(element => (element !== selectedTask)) }));
  }

  function handleDeleteProject(keyTitle) {
    setProjects(prevProjects => prevProjects.filter(project => (project.title !== keyTitle)));
    setSelectedProject(undefined);
  }

  return (
    <>
      <SideBar
        createdProjects={projects}
        onAddPrj={handleAddPrj}
        isDisable={isAddPrj}
        onClickProject={handleChooseProject}
      />
      {(!isAddPrj && !selectedProject) && <Entry onAddPrj={handleAddPrj} />}
      {isAddPrj &&
        <CreateProject
          onSave={handleCreateProject}
          onCancel={handleCancelCreateProject}
          onCheckDuplicate={(title) => !!projects.find(project => {return project.title === title})}
        />}
      {selectedProject &&
        <Project
          prj={selectedProject}
          ref={taskProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          onDeleteProject={handleDeleteProject}
        />}
    </>
  );
}

export default App;