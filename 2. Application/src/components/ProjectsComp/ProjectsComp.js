import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectsComp.css';

const ProjectsComp = (props) => {
    const {onClickShowInfo} = props;

    const projects = [
        {title: 'Project 1', 
        description: 'Lorem ipsum indiunt.', 
        abstract:'Lorem ipsum', 
        tags:['tag', 'tag', 'tag']},
    ];

    return (
        <div className='projects-view'>
            <h2 className='projects-title'>Projects</h2>
            <div className='projects-container'>
                <ProjectCard onClickShowInfo={onClickShowInfo}/>
                <ProjectCard onClickShowInfo={onClickShowInfo}/>
                <ProjectCard onClickShowInfo={onClickShowInfo}/>
            </div>
        </div>
    )
}

export default ProjectsComp;
