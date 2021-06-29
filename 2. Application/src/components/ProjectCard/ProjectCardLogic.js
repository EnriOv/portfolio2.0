const ProjectCardLogic = (props) => {
    const {tags, onClickShowInfo} = props;

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

    /*
        Function returns the tags of the project
    */
    const returnTags = () => {
        return (
            <>
            {
            tags.map((tag) => {
                return (
                    <div className='tag'>{tag}</div>
                );
                })
            }
            </>
        );
    }

    return {checkFunct, returnTags}
}

export default ProjectCardLogic;
