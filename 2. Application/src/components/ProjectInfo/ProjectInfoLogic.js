import uniqid from 'uniqid';
import {FaChevronLeft} from 'react-icons/fa';

const ProjectInfoLogic = (props) => {
    const {displayType, showInfo, project} = props;

    const classDemo = project.demo !== null ? 'but but-pro info-active' : 'but but-pro info-disable';
    const classCode = project.code !== null ? 'but but-pro info-active' : 'but but-pro info-disable';

    /*
        Function handles the decision to display a go back button for the project
        info depending on the display being used
    */
    const showReturnButton = () => {
        if(displayType === 'phone' || displayType === 'tablet') {
            return (
                <div className='ret-but-cont'>
                    <button className='but return-but' onClick={showInfo}>
                        <FaChevronLeft />
                    </button>
                </div>
            );
        }
    }

    /*
        Function returns the tags of the project
    */
    const returnTags = () => {
        return (
            <>
            {
            project.tags.map((tag) => {
                return (
                    <div key={uniqid()} className='tag'>{tag}</div>
                );
                })
            }
            </>
        );
    }

    /*
        Function returns the decription of the selected project
    */
    const returnDescription = () => {
        return (
            <>
            {
                project.details.map((item) => {
                    return (
                        <div key={uniqid()}>
                            <h2 className='subtitle'>{item.subtitle}</h2>
                            <p className='description'>{item.info}</p>
                        </div>
                    );
                })
            }
            </>
        );
    }

    /*
        Function handles the decision of showing the code and demo buttons depending
        of the display type
    */
    const showButtons = () => {
        if(displayType !== 'desktop') {
            return (
                <div className='but-section'>
                    <a className={classCode} href={project.code} target='none'>
                        CODE
                    </a>
                    <a className={classDemo} href={project.demo} target='none'>
                        DEMO
                    </a>
                </div>
            );
        }
    }
 
    return {showReturnButton, returnTags, returnDescription, showButtons}
}

export default ProjectInfoLogic;