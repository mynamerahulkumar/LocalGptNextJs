import Post from './Post.tsx';
import classes from './Post.module.css';
import NewPost from './NewPost.tsx';
import Modal from './Modal.tsx';
import { useState } from 'react';
function PostsList({isPosting,onStopPosting}){
  const[posts,setPosts]=useState([]);
  function addPostHandler(postData){
    setPosts((existingPosts)=>[postData,...existingPosts]);// get old states automatically and add new post to the beginning of the array
  }
    return(
        <>
       {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
    
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
  {posts.length>0 &&
    <ul className={classes.posts}>
        {posts.map((post)=>
        <Post key={post.body} author={post.author} body={post.body}/>)}
      </ul>
  }
  {posts.length==0 && <div style={{textAlign:'center',color:'white'}}>
    <h2>No posts yet. Start adding some!</h2>
    </div>}
        </>
    );
}

export default PostsList;