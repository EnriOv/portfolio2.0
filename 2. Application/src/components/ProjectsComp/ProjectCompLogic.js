import { useContext } from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectsContext from '../../context/ProjectsContext';

const ProjectCompLogic = (props) => {
    const {onClickShowInfo} = props;

    const data = useContext(ProjectsContext);

    /*
        Function to return all the project cards with their respective
        title, abstract, tags and button links
    */
    const returnCards = () => {
        return (
            <>
            {data.map((project) => {
                return (
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        abstract={project.abstract}
                        tags={project.tags}
                        codeUrl={project.code}
                        demoUrl={project.demo}
                        onClickShowInfo={onClickShowInfo}
                    />
                );}
            )}
            </>
        );
    }

    return {returnCards}
}

export default ProjectCompLogic;
