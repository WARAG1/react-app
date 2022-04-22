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
            <textarea></textarea>
            <button>Add Text</button>
          </div>
          <div className={classes.item}>
            <img src='https://svirtus.cdnvideo.ru/uxZDrOgTmlSIXbf3xdMg96HzCco=/0x0:429x429/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/45/45063cdab3574988ea1cd9f2584cd5f9.jpg?m=49897f93c30f01784d2b62df9800dbd9'></img>
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