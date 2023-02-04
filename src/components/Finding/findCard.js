import React from "react";
import classes from "./FindCard.module.css";
import Button from "../../UI/Button";

const findCard = (props) => {
  return (
    <div className={`${classes.card}`}>
      <div className={classes.imgbox}>
        <img className={classes.img} src={props.img} alt="karda1" />
      </div>
      <h3 className={classes.h3}>{props.heading}</h3>
      <div className={classes.parabox}>
        <p>
          {props.para}
        </p>
      </div>
      <div className={classes["box-btn"]}>
        <Button>{props.title}</Button>
      </div>
    </div>
  );
};

export default findCard;
