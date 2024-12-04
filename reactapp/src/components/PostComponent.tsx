import React from 'react'
import classes from './Post.module.css';
 function PostComponent({author,title}) {
  return (
    <li className={classes.post}>
     <p className={classes.author}>{author}</p>
     <p className={classes.text}>{title}</p>
    </li>
  )
}
export default PostComponent;