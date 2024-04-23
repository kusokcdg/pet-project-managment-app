import { useState } from "react";
import SideBar from "./components/SideBar";
import Entry from "./components/Entry";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddPrj, setIsAddPrj] = useState(false);
  const [selectedProject, setProjectSelected] = useState(undefined);

  // const listTitles = projects.length > 0 ? projects.map(prj => prj.title) : [];

  function handleAddPrj() {
    setIsAddPrj((isAddPrj) => !isAddPrj);
  }

  function handleCreateProject(objPrj) {
    setProjects((prevProjects) => {
      objPrj.tasks = {};
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
    setProjectSelected(createdProjects.find(
      project => {return project.title === chooseTitle}
      )
    );
  }

  return (
    <>
      <SideBar
        createdProjects={projects}
        onAddPrj={handleAddPrj}
        isDisable={isAddPrj}
        onProjectClick={handleChooseProject}
      />
      {(!isAddPrj && !selectedProject) && <Entry onAddPrj={handleAddPrj} />}
      {isAddPrj && <CreateProject onSave={handleCreateProject} onExit={handleCancelCreateProject} />}
      {console.log(projects)}
      {selectedProject && <Project prj={selectedProject}></Project>}
    </>
  );
}

export default App;