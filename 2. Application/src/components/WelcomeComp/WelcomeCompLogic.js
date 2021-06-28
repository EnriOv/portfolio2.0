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
            case 'tablet':
            case 'desktop':
                console.log('desktop-view')
                return (
                    <div className='desk-but-cont'>
                        <a href='https://github.com/' target='none' title='GitHub'>
                            <button className='but desk-but'>
                                Github
                            </button>
                        </a>
                        <a href='https://linkedin.com/' target='none' title='LinkedIn'>
                            <button className='but desk-but'>
                                LinkedIn
                            </button>
                        </a>
                        <a href='https://www.google.com/intl/en_us/docs/about/' target='none' title='Resume'>
                            <button className='but desk-but' id='resume-but'>
                                Resume
                            </button>
                        </a>
                    </div>
                );
            default:
                return <h2>Error: No homepage to display</h2>
        }
    }

    return {handleDisplayType}
}

export default WelcomeCompLogic;
