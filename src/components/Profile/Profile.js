import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://krot.info/uploads/posts/2021-02/1613711650_1-p-navi-fon-na-rabochii-stol-1.jpg' width="1450" height="250"></img>
      </div>
      <div className={classes.item}>
        Ava
      </div>
      <div className={classes.item}>
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
  )
}

export default Profile;