
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TabletViewLogic from './TabletViewLogic';
import TopNav from '../TopNav/TopNav';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

import './TabletView.css';

const TabletView = (props) => {
    const {displayType} = props;
    const {showInfo, handleShowInfo} = TabletViewLogic();

    return (
        <div className='tablet-view'>
            <div className='desc-cont'>
                <TopNav className='tablet-topnav'/>
                <WelcomeComp className='desk-welcome' displayType={displayType}/>
            </div>
            <div className='tablet-proj'>
                <ProjectsComp onClickShowInfo={handleShowInfo}/>
            </div>
            {showInfo && 
                <ProjectInfo 
                    className={'tablet-proj-info'}
                    showInfo={handleShowInfo}
                    displayType={displayType}/>
            }
        </div>
    )
}

export default TabletView;
