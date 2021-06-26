const ProjectCardLogic = (props) => {
    const {onClickShowInfo} = props;

    /* 
        Function to check if the onClickShowInfo callback has a function to execute
    */
    const checkFunct = () => {
        if(onClickShowInfo != null) {
            return(
                onClickShowInfo
            );
        }
    }

    return {checkFunct}
}

export default ProjectCardLogic;
