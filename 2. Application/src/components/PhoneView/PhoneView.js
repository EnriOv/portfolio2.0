import BotNav from '../BotNav/BotNav';
import TopNav from '../TopNav/TopNav';
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import WelcomeComp from "../WelcomeComp/WelcomeComp";

import './PhoneView.css';

const PhoneView = () => {
    return (
        <div className='phone-view'>
            <TopNav className='topnav-cont'/>
            {/* <WelcomeComp className='welcome-cont'/> */}
            <ProjectsComp />
            {/* <ProjectInfo source={'images/twitter-desk.png'} /> */}
            <BotNav className='botnav-cont'/>
        </div>
    )
}

export default PhoneView;
