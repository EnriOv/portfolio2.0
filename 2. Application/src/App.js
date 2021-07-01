import AppLogic from './AppLogic';
import ProjectsContext from './context/ProjectsContext';

function App() {
  const { data, checkDisplayType } = AppLogic();

  return (
    <div className="App">
      <ProjectsContext.Provider value={data}>
        {checkDisplayType()}
      </ProjectsContext.Provider>
    </div>
  );
}

export default App;
