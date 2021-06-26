import { useState, useEffect } from 'react';

import DesktopView from './components/DesktopView/DesktopView';
import PhoneView from './components/PhoneView/PhoneView';
import ProjectCard from './components/ProjectCard/ProjectCard';

const AppLogic = () => {
    const [displayType, setdisplayType] = useState('unknown');

    useEffect(() => {
        setdisplayType(checkWindowSize());
    }, [])

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    })

    const checkWindowSize = () => {
        if(window.innerWidth > 992) {
            setdisplayType('desktop');
            return 'desktop';
        }
        if(window.innerWidth < 992) {
            setdisplayType('phone');
            return 'phone';
        }
    }
    
    const checkDisplayType = () => {
        switch(displayType) {
            case 'desktop':
                return <DesktopView displayType={displayType}/>
            case 'phone':
                return <PhoneView displayType={displayType}/>
            default:
                return <ProjectCard />
        }
    }

    return { checkDisplayType }
}

export default AppLogic;
