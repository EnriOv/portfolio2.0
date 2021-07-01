import DesktopViewLogic from './DesktopViewLogic';
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TopNav from '../TopNav/TopNav';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

import './DesktopView.css';

const DesktopView = (props) => {
    const {displayType} = props;
    const {data, showInfo, handleShowInfo} = DesktopViewLogic(props);

    const project = data.filter((project) => {return project.id === showInfo && project});

    return (
        <div className='desktop-view'>
            <div className='desc-cont'>
                <TopNav className='desk-topnav'/>
                <WelcomeComp className='desk-welcome' displayType={displayType}/>
            </div>
            <div className='proj-cont'>
                <ProjectsComp 
                    onClickShowInfo={handleShowInfo}
                    currentId={showInfo}/>
            </div>
            <ProjectInfo 
                className={'info-cont'}
                showInfo={handleShowInfo}
                displayType={displayType}
                project={project[0]}
            />
            
        </div>
    )
}

export default DesktopView;
