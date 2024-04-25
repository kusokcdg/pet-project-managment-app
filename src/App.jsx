import { useState, useRef } from "react";
import SideBar from "./components/SideBar";
import Entry from "./components/Entry";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

let ii = 0;

function App() {
  const taskProject = useRef();
  const [projects, setProjects] = useState([]);
  const [isAddPrj, setIsAddPrj] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);
 console.log(ii);
 ii++;
 console.log(isAddPrj);
  // const P = {
  //   title:'test',
  //   tasks:[]
  // }
  // P.tasks.push('sd');
  // P.tasks.push('sd');
  // console.log(P);
  // {selectedProject&& console.log(selectedProject.tasks)}
  // const listTitles = projects.length > 0 ? projects.map(prj => prj.title) : [];

  function handleAddPrj() {
    setIsAddPrj((isAddPrj) => !isAddPrj);
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
      project => { return project.title === chooseTitle }
    ));
  }

  function handleAddTask() {
    const newTask = taskProject.current.add();
    taskProject.current.clear();
    // setSelectedProject((selectedPrj) => {
    //   selectedPrj.tasks.push(task);
    //   return selectedPrj;
    // });
    // setSelectedProject((prj) => {
    //   // prj.tasks.push(newTask);
    //   const updPrj = prj;
    //   updPrj.tasks = [
    //     newTask,
    //     ...updPrj.tasks
    //   ];
    //   return updPrj;
    // })
    console.log(newTask);
    console.log(selectedProject);
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
          onExit={handleCancelCreateProject}
        />}
      {console.log(projects)}
      {selectedProject &&
        <Project
          prj={selectedProject}
          ref={taskProject}
          onAddTask={handleAddTask}
        />}
    </>
  );
}

export default App;