import React from "react";
import Buttonw from "../UI/Buttonw";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <h4 className={classes.heading}>about kardaclan</h4>
      <div className={classes.pbox}>
      <p className={classes.para}>
        Kclan is one of the world’s fastest-growing real estate. Founded in
        2018, we are now in Ghana with a community from different part of Ghana,
        all connected through our unique cloud-based platform, Kclan World.
      </p>
      </div>
      <Buttonw>learn more about kardaclan</Buttonw>
    </section>
  );
};

export default About;
