import ProjectInfoLogic from './ProjectInfoLogic';

import './ProjectInfo.css';

const ProjectInfo = (props) => {
    const {className, project} = props;
    const {showReturnButton, returnTags, returnDescription, showButtons} = ProjectInfoLogic(props);

    return (
        <div className={className}>
            <div className='information'>
                {showReturnButton()}
                <img className='project-img' src={project.img} alt={'project-demo'}></img>
                <h2 className='title'>{project.title}</h2>
                <p className='description'>{project.description}</p>
                {returnDescription()}
                <h2 className='subtitle'>Tags</h2>
                <div className='tags-section tags-project'>
                    {returnTags()}
                </div>
                {showButtons()}
            </div>
        </div>
    )
}

ProjectInfo.defaultProps = {
    project: {
        title: "Select a project to display",
        description: "To check a project click on a card and all the information will be displayed in this section.",
        details: [],
        demo: null,
        code: null,
        tags: []
    }
}

export default ProjectInfo;
