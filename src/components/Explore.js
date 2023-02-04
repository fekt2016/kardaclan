import React from "react";
import Buttonw from "../UI/Buttonw";
import classes from "./Explore.module.css";

const Explore = () => {
  return (
    <section className={classes.exp}>
      <h4 className={classes.heading}>Explore Our Real Estate Services</h4>
      <p className={classes.para}>
        Kardaclan offers unique tools to help agents and clients buy and sell
        stress-free.
      </p>
      <Buttonw>learn more</Buttonw>
      <div className={classes.boxbtn}>
        <Buttonw>for sale</Buttonw>
        <Buttonw>for rent</Buttonw>
        <Buttonw>land sales</Buttonw>
        <Buttonw>gallery</Buttonw>
      </div>
    </section>
  );
};

export default Explore;
