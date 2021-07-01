import { useState, useEffect } from 'react';

import DesktopView from './components/DesktopView/DesktopView';
import PhoneView from './components/PhoneView/PhoneView';
import ProjectCard from './components/ProjectCard/ProjectCard';
import PuffLoader from 'react-spinners/PuffLoader';
import TabletView from './components/TabletView/TabletView';

const AppLogic = () => {
    const [data, setData] = useState([]);
    const [displayType, setdisplayType] = useState('unknown');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        removeLoadingScreen();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    })

    const removeLoadingScreen = async () => {
        await setdisplayType(checkWindowSize());
        await getData();
        setLoading(false);
    }

    const getData=()=>{
        fetch('projects.json'
        ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            setData(myJson);
        });
    }

    const checkWindowSize = () => {
        if(window.innerWidth > 1200) {
            setdisplayType('desktop');
            return 'desktop';
        }
        if(window.innerWidth >= 992 && window.innerWidth <= 1200) {
            setdisplayType('tablet');
            return 'tablet';
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
            case 'tablet':
                return <TabletView displayType={displayType}/>
            case 'phone':
                return <PhoneView displayType={displayType} />
            default:
                return <ProjectCard />
        }
    }

    return { data, loading, PuffLoader, checkDisplayType }
}

export default AppLogic;
