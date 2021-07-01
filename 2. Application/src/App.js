import AppLogic from './AppLogic';
import ProjectsContext from './context/ProjectsContext';

function App() {
  const { data, loading, PuffLoader, checkDisplayType } = AppLogic();

  return (
    <div className="App">
      <ProjectsContext.Provider value={data}>
        {loading ? 
          <div className='loader'>
             <PuffLoader size={'10em'} color={'#c7e9ff'} loading={loading}/>
             <h1 className='loading-title'>LOADING</h1>
          </div>
          : 
          checkDisplayType()}
      </ProjectsContext.Provider>
    </div>
  );
}

export default App;
