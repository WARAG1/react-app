import React from 'react';
import classes from './MyPost.module.css'
import Post from './NewPost/Post'

const MyPost = () => {
  return (
    <div>
      <div>
        My posts
      </div>
      <div className={classes.post}>
        <div>
          <textarea></textarea>
          <button>Add Text</button>
        </div>
        <div className={classes.item}>
          <Post message='Бро, я уже тренируюсь' />
          <Post message='Бро, тебе надо тренироваться' />
        </div>
      </div >
    </div>  
  )
}

export default MyPost;