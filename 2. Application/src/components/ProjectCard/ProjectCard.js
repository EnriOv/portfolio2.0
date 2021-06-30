import ProjectCardLogic from './ProjectCardLogic';

import './ProjectCard.css'

const ProjectCard = (props) => {
    const {id, title, abstract, demoUrl, codeUrl, onClickShowInfo} = props;
    const {returnTags} = ProjectCardLogic(props);

    const classDemo = demoUrl !== null ? 'but but-demo active' : 'but but-demo disable';
    const classCode = codeUrl !== null ? 'but but-code active' : 'but but-code disable';

    return (
        <div className='project-card'>
            <div className='card-info' onClick={() => onClickShowInfo(id)}>
                <h3 className='project-title'>{title}</h3>
                <p className='abstract'>{abstract}</p>
                <div className='tags-section'>
                    {returnTags()}
                </div>
            </div>
            <div className='buttons'>
                <button type="button" className={classDemo} onClick={(e) => {
                    e.preventDefault();

                    if(demoUrl !== null) {
                        window.open(demoUrl, 'blank');
                    }
                }}>
                    <span>DEMO</span>
                </button>
                <button className={classCode} onClick={(e) => {
                    e.preventDefault();

                    if(demoUrl !== null) {
                        window.open(codeUrl, 'blank');
                    }
                }}>
                    <span>CODE</span>
                </button>
            </div>
        </div>
    )
}

ProjectCard.defaultProps = {
    title: 'Project Card',
    abstract: 'Sunt voluptate deserunt pariatur cillum dolore ad aute esse elit non labore. Est qui cupidatat voluptate culpa minim dolore excepteur incididunt sunt qui ullamco irure. Dolore do irure qui cupidatat commodo tempor nostrud deserunt anim. Ullamco consectetur elit ex ut laborum ea dolor ea mollit.',
    tags: [],
    codeUrl: null,
    demoUrl: null,
    onClickShowInfo: () => {}
};

export default ProjectCard;
