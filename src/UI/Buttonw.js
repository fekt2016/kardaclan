import React from 'react';
import classes from './Buttonw.module.css';

const Buttonw = (props) => {
  return (
     <a className={classes.btn} href="/">{props.children}</a>
  )



}

export default Buttonw