import React from "react";
import FindCard from "./findCard";
import classes from "./Finding.module.css";
import img1 from "../../asset/house1.jpeg";
import img2 from "../../asset/house7.jpeg";
import img3 from "../../asset/house76.jpeg";

const Finding = () => {
  return (
    <section className={classes.finding}>
      <div className={classes.headerbox}>
        <h2>Kardaclan Makes Finding and Buying a Home Easy</h2>
        <p>
          Whether you’re buying or selling, our agents provide deep local real
          estate experience and knowledge to make your experience as
          frictionless and empowering as possible.
        </p>
      </div>
      <div className={classes["container-card"]}>
        <FindCard
          img={img1}
          heading="buying your next home"
          para=" Buying a home is one of the most important decisions you will
              make, and our local experts at eXp Realty are here to make the
              process as easy as possible."
          btn="buy a home"
          title='buy a home'
        />
        <FindCard
          img={img2}
          heading="sell your next home"
          para=" Selling your home can feel like a big project, but our agents are
              ready to make every step of the journey as smooth as possible. Let
              an eXp agent be your guide to selling your home like a pro."
          btn="sell your home"
          title='sell your next home'
        />
        <FindCard
          img={img3}
          heading="find an Kclan agent"
          para="Whether you are looking to buy, sell or rent, our experienced and
          passionate agents are on hand to help make it happen. Find the
          perfect agent for your needs below."
          btn="find an agent"
          title='find an agent'
        />
      </div>
    </section>
  );
};

export default Finding;
