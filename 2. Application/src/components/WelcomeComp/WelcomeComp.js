import RobotIntDraw from "./assets/RobotIntDraw";
import WelcomeCompLogic from "./WelcomeCompLogic";

import './WelcomeComp.css';

const WelcomeComp = (props) => {
    const {className} = props;

    WelcomeCompLogic();

    return (
        <div className={className}>
            <RobotIntDraw className='main-draw' />
            <p className='presentation'>Dolor incididunt proident sit ex laboris reprehenderit laborum duis cupidatat magna ex id. Est duis qui duis duis ea culpa esse laborum amet. In magna labore id reprehenderit velit consectetur mollit incididunt deserunt mollit. Commodo nisi qui sint sunt commodo id est et exercitation mollit.</p>
            <div className='but-container'>
                <button className='but projects-but'>PROJECTS</button>
            </div>
        </div>
    )
}

export default WelcomeComp;
