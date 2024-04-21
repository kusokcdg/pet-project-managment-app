import { useState } from "react";
import SideBar from "./components/SideBar";
import Entry from "./components/Entry";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";


function App() {
  const [projects, setProjects] = useState([]);
  const [isAddPrj, setIsAddPrj] = useState(false);

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

  return (
    <>
      <SideBar
        onAddPrj={handleAddPrj}
        isDisable={isAddPrj}
      />
      {!isAddPrj && <Entry onAddPrj={handleAddPrj} />}
      {isAddPrj && <CreateProject onSave={handleCreateProject} onExit={handleCancelCreateProject} />}
      {console.log(projects)}
      {/* <Project></Project> */}
    </>
  );
}

export default App;
