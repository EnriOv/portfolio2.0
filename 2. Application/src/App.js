import BotNav from './components/BotNav/BotNav'
import ProjectCard from './components/ProjectCard/ProjectCard'
import TopNav from './components/TopNav/TopNav'

function App() {
  return (
    <div className="App">
      <TopNav />
      <ProjectCard activeButtons={{'demo': true, 'code': true}}/>
      <BotNav />
    </div>
  );
}

export default App;
