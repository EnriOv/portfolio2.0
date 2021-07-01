import {useState, useContext} from 'react';

import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectsContext from '../../context/ProjectsContext';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

const PhoneViewLogic = (props) => {
    const {displayType} = props;
    const [showInfo, setShowInfo] = useState({show: false, id: 0});
    const [view, setView] = useState('home');

    const data = useContext(ProjectsContext);

    /* 
        Function handles the option to display the information of a selected
        project from the list of projects. Used in the 'ProjectsComp' component
    */
    const handleShowInfo = (setId = 0) => {
        setShowInfo({show: !showInfo.show, id: setId});
    }

    /* 
        Function utilized in 'BotNav' component used to select view depending 
        on the selection in the bottom nav bar
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
        the 'WelcomeComp' component
    */
    const handleProjBut = () => {
        setView('projects');
    }

    /* 
        Function handles which component to display between the homepage and 
        projects view. Used in the 'PhoneView' component
    */
    const displayComp = () => {
        switch(view) {
            case 'home':
                return <WelcomeComp 
                        className='welcome-cont' 
                        onClickProjects={handleProjBut}
                        displayType={displayType}/>
            case 'projects':
                return <ProjectsComp onClickShowInfo={handleShowInfo} />
            default:
                return <h2>Error</h2>
        }
    }

    return {data, showInfo, handleShowInfo, handleView, displayComp}
}

export default PhoneViewLogic;
