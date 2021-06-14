import './ProjectCard.css'

const ProjectCard = () => {
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
