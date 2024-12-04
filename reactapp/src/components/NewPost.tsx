import classes from './NewPost.module.css';
function NewPost(props){
   
    return(
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}></textarea>
            </p>
            <p>
                <label htmlFor="author">Your Name</label>
                <input type="text" id="author" required onChange={props.onAuthorChange}/>
            </p>

        </form>
    );
}

export default NewPost;