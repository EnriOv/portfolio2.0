import {useState, useContext} from 'react';

import ProjectsContext from '../../context/ProjectsContext';

const TabletViewLogic = (props) => {
    const [showInfo, setshowInfo] = useState({show: false, id: 0});
    
    const data = useContext(ProjectsContext);

    /* 
        Function handles the option to display the information of a selected
        project from the list of projects. Used in the 'ProjectsComp' component
    */
    const handleShowInfo = (setId = 0) => {
        setshowInfo({show: !showInfo.show, id: setId});
    }

    return {data, showInfo, handleShowInfo}
}

export default TabletViewLogic;