import './ProjectCard.css'

const ProjectCard = (props) => {
    const {activeButtons} = props;

    const classDemo = activeButtons.demo ? 'but but-demo active' : 'but but-demo disable';
    const classCode = activeButtons.code ? 'but but-demo active' : 'but but-demo disable';

    return (
        <div className='project-card'>
            <div className='project-info'>
                <h3 className='project-title'>Project Card</h3>
                <p className='abstract'>Sunt voluptate deserunt pariatur cillum dolore ad aute esse elit non labore. Est qui cupidatat voluptate culpa minim dolore excepteur incididunt sunt qui ullamco irure. Dolore do irure qui cupidatat commodo tempor nostrud deserunt anim. Ullamco consectetur elit ex ut laborum ea dolor ea mollit.</p>
                <div className='tags-section'>
                    <div className='tag'>tag</div>
                    <div className='tag'>tag</div>
                    <div className='tag'>tag</div>
                    <div className='tag'>tag</div>
                    <div className='tag'>tag</div>
                </div>
            </div>
            <div className='buttons'>
                <button className={classDemo} disabled={activeButtons.demo}>
                    <span>DEMO</span>
                </button>
                <button className={classCode} disabled={activeButtons.code}>
                    <span>CODE</span>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
