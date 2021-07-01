import ProjectCompLogic from './ProjectCompLogic';

import './ProjectsComp.css';

const ProjectsComp = (props) => {
    const {returnCards} = ProjectCompLogic(props);

    return (
        <div className='projects-view'>
            <h2 className='projects-title'>Projects</h2>
            <div className='projects-container'>
                {returnCards()}
            </div>
        </div>
    )
}

ProjectsComp.defaultProps = {
    onClickShowInfo: null
}

export default ProjectsComp;
