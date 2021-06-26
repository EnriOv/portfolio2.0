import {useState} from 'react';

const TabletViewLogic = (props) => {
    const [showInfo, setshowInfo] = useState(false);
    
    /* 
        Function handles the option to display the information of a selected
        project from the list of projects. Used in the 'ProjectsComp' component.
    */
    const handleShowInfo = () => {
        setshowInfo(!showInfo);
    }

    return {showInfo, handleShowInfo}
}

export default TabletViewLogic;