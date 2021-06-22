import BotNav from '../BotNav/BotNav';
import TopNav from '../TopNav/TopNav';
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

import {useState} from 'react';

import './PhoneView.css';

const PhoneView = () => {
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

    const displayComp = () => {
        switch(view) {
            case 'home':
                return <WelcomeComp className='welcome-cont'/>
            case 'projects':
                return <ProjectsComp onClickShowInfo={handleShowInfo}/>
            default:
                return <WelcomeComp className='welcome-cont'/>
        }
    }

    return (
        <div className='phone-view'>
            <TopNav className='topnav-cont'/>
            { displayComp() }
            {showInfo && <ProjectInfo source={'images/twitter-desk.png'} />}
            <BotNav className='botnav-cont' onSelectView={handleView}/>
        </div>
    )
}

export default PhoneView;
