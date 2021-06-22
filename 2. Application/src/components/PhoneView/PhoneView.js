import BotNav from '../BotNav/BotNav';
import TopNav from '../TopNav/TopNav';
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import WelcomeComp from "../WelcomeComp/WelcomeComp";

import {useState} from 'react';

import './PhoneView.css';

const PhoneView = () => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className='phone-view'>
            <TopNav className='topnav-cont'/>
            {/* <WelcomeComp className='welcome-cont'/> */}
            <ProjectsComp onClickShowInfo={handleShowInfo}/>
            {showInfo && <ProjectInfo source={'images/twitter-desk.png'} />}
            <BotNav className='botnav-cont'/>
        </div>
    )
}

export default PhoneView;
