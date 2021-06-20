import BotNav from "../BotNav/BotNav";
import TopNav from "../TopNav/TopNav";
import WelcomeComp from "../WelcomeComp/WelcomeComp";

import './PhoneView.css';

const PhoneView = () => {
    return (
        <div className='phone-view'>
            <TopNav className='topnav-cont'/>
            <WelcomeComp className='welcome-cont'/>
            <BotNav className='botnav-cont'/>
        </div>
    )
}

export default PhoneView;