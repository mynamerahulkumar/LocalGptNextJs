import PostComponent from './PostComponent.tsx';
import classes from './Post.module.css';
import NewPost from './NewPost.tsx';
import { useState } from 'react';
import Modal from './Modal.tsx';
function PostList(){
    const[bodyText,setBodyText]=useState('');
    const[authorName,setAuthorName]=useState('');
    const[modelVisible,setModelVisible]=useState(false);
    function bodyChangeHandler(event){
        setBodyText(event.target.value);
    }
    function nameChangeHandler(event){
        setAuthorName(event.target.value);
    }
    function showModalHandler(){
        setModelVisible(true);
    }
    return(
        <>
        {modelVisible &&
        <Modal onClose={showModalHandler}>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={nameChangeHandler}/>
        </Modal>
}
        <ul className={classes.post}>
           <PostComponent author={authorName} title={bodyText}/>
           <PostComponent author="Kumar" title="Next js is awesome"/>
        </ul>
       
        </>
    );
}

export default PostList;