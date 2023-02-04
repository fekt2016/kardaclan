import React  from "react";
import Finding from "../Finding/Finding";
import Explore from "../Explore";
import About from "../About";

const Main = (props) => {




  return (
    <main ref={props.refS}>
      <Finding />
      <Explore />
      <About />
    </main>
  );
};

export default Main;
