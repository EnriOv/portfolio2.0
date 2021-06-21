import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectsComp.css';

const ProjectsComp = () => {
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
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectsComp;
