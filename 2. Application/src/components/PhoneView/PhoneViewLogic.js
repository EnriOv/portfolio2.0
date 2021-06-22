import {useState} from 'react';

import ProjectsComp from '../ProjectsComp/ProjectsComp';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

const PhoneViewLogic = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [view, setView] = useState('home');

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    const handleView = (selectedView = 'unknown') => {
        switch(selectedView) {
            case 'home':
            case 'projects':
                setView(selectedView);
                break;
            default:
                setView('home');
        }
    }

    const handleProjBut = () => {
        setView('projects');
    }

    const displayComp = () => {
        switch(view) {
            case 'home':
                return <WelcomeComp className='welcome-cont' onClickProjects={handleProjBut}/>
            case 'projects':
                return <ProjectsComp onClickShowInfo={handleShowInfo}/>
            default:
                return <h2>Error</h2>
        }
    }

    return {showInfo, handleView, displayComp}
}

export default PhoneViewLogic;
