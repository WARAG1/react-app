import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div>
    <div >
      <div>
        <img src='https://krot.info/uploads/posts/2021-02/1613711650_1-p-navi-fon-na-rabochii-stol-1.jpg' width="1450" height="250"></img>
      </div>
      <div className={classes.item}>
        Ava
      </div>
      <MyPost/>
    </div>
    </div >
  )
}

export default Profile;