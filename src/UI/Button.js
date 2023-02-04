import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return <a className={classes.btn} href="/">{props.children}</a>;
};

export default Button;
