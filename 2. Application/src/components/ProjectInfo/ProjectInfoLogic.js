import {FaChevronLeft} from 'react-icons/fa';

const ProjectInfoLogic = (props) => {
    const {displayType, showInfo, project} = props;

    /*
        Function handles the decision to display a go back button for the project
        info depending of the display being used
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
                    <div key={tag} className='tag'>{tag}</div>
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
                        <>
                            <h2 className='subtitle'>{item.subtitle}</h2>
                            <p className='description'>{item.info}</p>
                        </>
                    );
                })
            }
            </>
        );
    }
 
    return {showReturnButton, returnTags, returnDescription}
}

export default ProjectInfoLogic;
