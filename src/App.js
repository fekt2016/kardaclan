import React, { useState, useRef, useMemo, useEffect } from "react";
import Nav from "./components/Layout/Nav";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./components/Layout/Main";
import Aboutus from "./components/pages/Aboutus";
import Project from "./components/pages/Project";
import Media from "./components/pages/Media";
import Contact from "./components/pages/Contact";
import Mortgage from "./components/pages/Mortgage";
import { Routes,Route } from "react-router-dom";


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const mainRef = useRef(null);

  const callback = (entries) => {
    const [entry] = entries;
    console.log(entry);
    setIsVisible(entry.isIntersecting);
  };

  const mainOptions = useMemo(() => {
    return {
      root: null,
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    const mainOberser = new IntersectionObserver(callback, mainOptions);
    const targetMain = mainRef.current;
    if (targetMain) mainOberser.observe(mainRef.current);

    return () => {
      if (targetMain) mainOberser.unobserve(targetMain);
    };
  }, [mainOptions, mainRef]);
  return (
    <React.Fragment>
      <Nav onVisible={isVisible} />
      <Header />
      <Routes>
        <Route path="/" element={<Main refS={mainRef} />}>

        </Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/media' element={<Media/>}></Route>
        <Route path='/mortgage' element={<Mortgage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      <Footer />
    </React.Fragment>
  );
}


export default App;
