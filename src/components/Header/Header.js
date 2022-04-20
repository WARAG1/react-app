import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/5/5f/NAVI_Logo.svg/1163px-NAVI_Logo.svg.png' />
    </header>
  )
}

export default Header;