import BotNav from './components/BotNav/BotNav';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import TopNav from './components/TopNav/TopNav';

import { useState, useEffect } from 'react';
import PhoneView from './components/PhoneView/PhoneView';

function App() {
  const [displayType, setdisplayType] = useState('unknown');

  useEffect(() => {
    setdisplayType(checkWindowSize());
  }, [])

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    }
  })

  const checkWindowSize = () => {
    if(window.innerWidth > 992) {
      setdisplayType('desktop');
      return 'desktop';
    }
    if(window.innerWidth < 992) {
      setdisplayType('phone');
      return 'phone';
    }
  }

  const checkDisplayType = () => {
    switch(displayType) {
      case 'desktop':
        return <TopNav />
      case 'phone':
        return <PhoneView />
      default:
        return <ProjectCard />
    }
  }

  return (
    <div className="App">
      {checkDisplayType()}
    </div>
  );
}

export default App;
