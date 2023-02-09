import React  from "react";
import Finding from "../Finding/Finding";
import Explore from "../Explore";
import About from "../About";
import Header from "./Header";

const Main = (props) => {




  return (
    <main ref={props.refS}>
      <Header  />
      <Finding />
      <Explore />
      <About />
    </main>
  );
};

export default Main;
