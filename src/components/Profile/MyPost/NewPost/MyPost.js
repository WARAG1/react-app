import React from 'react';
import classes from './MyPost.module.css'

const MyPost = () => {
  return (
    <div>
    <div>
      <div>
        My posts
      </div>
      <div className={classes.post}>
        <div>
          New post
        </div>
        <div className={classes.item}>
          Post 1
        </div>
        <div className={classes.item}>
          Post 2
        </div>
      </div>
    </div>
    </div >
  )
}

export default MyPost;