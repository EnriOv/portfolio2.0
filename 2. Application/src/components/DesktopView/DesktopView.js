import ProjectInfo from '../ProjectInfo/ProjectInfo';
import TopNav from '../TopNav/TopNav';
import WelcomeComp from '../WelcomeComp/WelcomeComp';

import './DesktopView.css';

const DesktopView = () => {
    return (
        <div className='desktop-view'>
            <div className='desc-cont'>
                <TopNav className='desk-topnav'/>
                <WelcomeComp className='welcome-cont'/>
            </div>
            
            
        </div>
    )
}

export default DesktopView;
