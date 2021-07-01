import ProjectInfoLogic from './ProjectInfoLogic';

import './ProjectInfo.css';

const ProjectInfo = (props) => {
    const {className, project} = props;
    const {showReturnButton, returnTags, returnDescription} = ProjectInfoLogic(props);

    const classDemo = project.demo !== null ? 'but but-pro info-active' : 'but but-pro info-disable';
    const classCode = project.code !== null ? 'but but-pro info-active' : 'but but-pro info-disable';

    return (
        <div className={className}>
            <div className='information'>
                {showReturnButton()}
                <img className='project-img' src={project.img} alt='project-image'></img>
                <h2 className='title'>{project.title}</h2>
                <p className='description'>{project.description}</p>
                {returnDescription()}
                <h2 className='subtitle'>Tags</h2>
                <div className='tags-section tags-project'>
                    {returnTags()}
                </div>
                <div className='but-section'>
                    <a className={classCode} href={project.code} target='none'>
                        CODE
                    </a>
                    <a className={classDemo} href={project.demo} target='none'>
                        DEMO
                    </a>
                </div>
            </div>
        </div>
    )
}

ProjectInfo.defaultProps = {
    project: {
        title: "Select a project to display",
        description: "To check a project click on a card and all the information will be displayed in this section.",
        subtitle: [],
        details: [],
        demo: null,
        code: null,
        tags: []
    }
}

export default ProjectInfo;
