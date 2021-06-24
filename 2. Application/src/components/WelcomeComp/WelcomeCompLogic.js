import { useEffect, useRef } from 'react';

import anime from 'animejs/lib/anime.es.js';

const WelcomeCompLogic = (props) => {
    const {onClickProjects, displayType} = props;
    const animationRef = useRef(null);
    
    useEffect(() => {
        /* Animation of the 'RobotIntDraw' svg drawing */
        animationRef.current = anime({
            targets: ".rotate-pie",
            keyframes: [
                {rotate: -90},
                {rotate: 90}
            ],
            duration: 2000,
            easing: "easeInOutSine",
            direction: "alternate",
            loop: true
        });
    }, []);

    /*
        Function handles the selection of which type of buttons to display
        depending of the display type
    */
    const handleDisplayType = () => {
        switch(displayType) {
            case 'phone':
                return (
                    <div className='but-container'>
                        <button className='but projects-but' onClick={() => onClickProjects()}>PROJECTS</button>
                    </div>
                );
            case 'desktop':
                console.log('desktop-view')
                return (
                    <div className='but-container'>
                        <button className='but'>Github</button>
                        <button className='but'>LinkedIn</button>
                        <button className='but'>Resume</button>
                    </div>
                );
            default:
                return <h2>Error: No homepage to display</h2>
        }
    }

    return {handleDisplayType}
}

export default WelcomeCompLogic;
