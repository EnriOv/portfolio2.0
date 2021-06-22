import './ProjectInfo.css';

const ProjectInfo = (props) => {
    const {source} = props;

    return (
        <div className='project-info'>
            <div className='information'>
                <img className='project-img' src={source} alt='project-image'></img>
                <h2 className='title'>Project Title</h2>
                <p className='description'>Exercitation aute irure laborum sint reprehenderit cillum reprehenderit nulla. Id quis do duis cillum do eiusmod qui nulla irure. Nulla veniam veniam amet esse id. Et commodo ad dolore magna incididunt fugiat ad deserunt ut est quis. Eiusmod cupidatat eu consequat esse ipsum id aliqua sunt. Voluptate culpa pariatur irure deserunt laboris aliqua cillum dolor commodo. Consequat reprehenderit nulla sint Lorem tempor.</p>
                <h2 className='subtitle'>Subtitle</h2>
                <p className='description'>Occaecat nisi sint velit eiusmod et laboris reprehenderit ad laborum. Culpa duis esse eiusmod voluptate aliqua consequat officia. Veniam ullamco qui voluptate nostrud enim labore duis velit tempor nostrud est ipsum minim non. Quis nulla esse duis culpa magna sint aliquip.</p>
                <h2 className='subtitle'>Tags</h2>
                <div className='tags-section tags-project'>
                    <div className='tag'>Tag</div>
                    <div className='tag'>Tag</div>
                    <div className='tag'>Tag</div>
                    <div className='tag'>Tag</div>
                </div>
                <div className='but-section'>
                    <button className='but but-pro'>CODE</button>
                    <button className='but but-pro'>DEMO</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;
