import BotNav from '../BotNav/BotNav';
import PhoneViewLogic from './PhoneViewLogic';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TopNav from '../TopNav/TopNav';

import './PhoneView.css';

const PhoneView = () => {
    const {showInfo, handleView, displayComp} = PhoneViewLogic();

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
