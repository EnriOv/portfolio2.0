import BotNav from '../BotNav/BotNav';
import PhoneViewLogic from './PhoneViewLogic';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TopNav from '../TopNav/TopNav';

import './PhoneView.css';

const PhoneView = (props) => {
    const {displayType} = props;
    const {data, showInfo, handleShowInfo, handleView, displayComp} = PhoneViewLogic(props);

    const project = data.filter((project) => {return project.id === showInfo.id && project});

    return (
        <div className='phone-view'>
            <TopNav className='topnav-cont'/>
            { displayComp() }
            {showInfo.show && 
                <ProjectInfo
                    className={'project-info'}
                    showInfo={handleShowInfo}
                    displayType={displayType}
                    project={project[0]}
                />}
            <BotNav className='botnav-cont' onSelectView={handleView}/>
        </div>
    )
}

export default PhoneView;
