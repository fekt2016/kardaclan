import React, { useState } from "react";
import classes from "./Burger.module.css";

const Burger = (props) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    props.onClickHandler(open);
    return setOpen(!open);
  };
  return (
    <>
      <div onClick={clickHandler} className={classes.burger}>
        <div
          className={`${classes.icon} ${classes.icon1} ${
            !open && classes.icontr1
          }`}
        ></div>
        <div
          className={`${classes.icon} ${classes.icon2} ${
            !open && classes.icontr2
          }`}
        ></div>
        <div
          className={`${classes.icon} ${classes.icon3} ${
            !open && classes.icontr3
          }`}
        ></div>
      </div>
    </>
  );
};

export default Burger;
