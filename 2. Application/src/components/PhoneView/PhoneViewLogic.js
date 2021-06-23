import {useState} from 'react';

import ProjectsComp from '../ProjectsComp/ProjectsComp';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

const PhoneViewLogic = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [view, setView] = useState('home');

    /* 
        Function handles the option to display the information of a selected
        project from the list of projects. Used in the 'ProjectsComp' component.
    */
    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    /* 
        Function utilized in 'BotNav' component used to select view depending 
        on the selection in the bottom nav bar.
    */
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

    /* 
        Function used to display list of projects using the button located in 
        the 'WelcomeComp' component.
    */
    const handleProjBut = () => {
        setView('projects');
    }

    /* 
        Function handles which component to display between the homepage and 
        projects view. Used in the 'PhoneView' component.
    */
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

    return {showInfo, handleShowInfo, handleView, displayComp}
}

export default PhoneViewLogic;
