import { useState, useContext } from 'react';

import ProjectsContext from '../../context/ProjectsContext';

const DesktopViewLogic = (props) => {
    const data = useContext(ProjectsContext);

    const [showInfo, setShowInfo] = useState(1);

    /* 
        Function handles the option to display the information of a selected
        project depending. Used in the 'ProjectsComp' component.
    */
    const handleShowInfo = (setId = 0) => {
        setShowInfo(setId);
    }

    return {data, showInfo, handleShowInfo}
}

export default DesktopViewLogic;
