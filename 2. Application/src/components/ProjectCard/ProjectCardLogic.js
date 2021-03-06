const ProjectCardLogic = (props) => {
    const {tags} = props;

    /*
        Function returns the tags of the project
    */
    const returnTags = () => {
        return (
            <>
            {
            tags.map((tag) => {
                return (
                    <div key={tag} className='tag'>{tag}</div>
                );
                })
            }
            </>
        );
    }

    return {returnTags}
}

export default ProjectCardLogic;
