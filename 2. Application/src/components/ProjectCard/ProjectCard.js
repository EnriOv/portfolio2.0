import './ProjectCard.css'

const ProjectCard = () => {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <h3 className='project-title'>Project Card</h3>
                <p className='abstract'>Absract</p>
                <div className='tags-section'>
                    Tags
                </div>
            </div>
            <a href='blank' className='demo'>
                <button className='but but-demo'>DEMO</button>
            </a>
            <a href='blank' className='code'>
                <button className='but but-code'>CODE</button>
            </a>
        </div>
    )
}

export default ProjectCard
