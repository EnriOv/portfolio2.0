import {FaChevronLeft} from 'react-icons/fa';

const ProjectInfoLogic = (props) => {
    const {displayType, closeInfo} = props;

    const showReturnButton = () => {
        if(displayType == 'phone' || displayType == 'tablet') {
            return (
                <div className='ret-but-cont'>
                    <button className='but return-but' onClick={closeInfo}>
                        <FaChevronLeft />
                    </button>
                </div>
            );
        }
    }
 
    return {showReturnButton}
}

export default ProjectInfoLogic;
