import BotNav from '../BotNav/BotNav';
import PhoneViewLogic from './PhoneViewLogic';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TopNav from '../TopNav/TopNav';

import './PhoneView.css';

const PhoneView = (props) => {
    const {showInfo, handleShowInfo, handleView, displayComp} = PhoneViewLogic(props);

    return (
        <div className='phone-view'>
            <TopNav className='topnav-cont'/>
            { displayComp() }
            {showInfo && 
                <ProjectInfo 
                    className={'project-info'}
                    source={'images/twitter-desk.png'}
                    showInfo={handleShowInfo}
                    displayType={props.displayType}
                />}
            <BotNav className='botnav-cont' onSelectView={handleView}/>
        </div>
    )
}

export default PhoneView;
