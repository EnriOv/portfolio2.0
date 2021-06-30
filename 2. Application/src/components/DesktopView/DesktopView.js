import ProjectsComp from '../ProjectsComp/ProjectsComp';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TopNav from '../TopNav/TopNav';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

import './DesktopView.css';

const DesktopView = (props) => {
    const {displayType} = props;

    return (
        <div className='desktop-view'>
            <div className='desc-cont'>
                <TopNav className='desk-topnav'/>
                <WelcomeComp className='desk-welcome' displayType={displayType}/>
            </div>
            <div className='proj-cont'>
                <ProjectsComp />
            </div>
            <ProjectInfo 
                className={'info-cont'}
                displayType={displayType}
            />
            
        </div>
    )
}

export default DesktopView;
