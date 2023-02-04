import { Fragment, useState, useRef, useMemo, useEffect } from "react";
import Nav from "./components/Layout/Nav";
import Header from "./components/Layout/Header";
import Footer from './components/Layout/Footer';
import Main from './components/Layout/Main';

function App() {


const [isVisible, setIsVisible] = useState(false);

const mainRef = useRef(null);

const callback = (entries) => {
  const [entry] = entries;
  console.log(entry);
  setIsVisible(entry.isIntersecting)

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
    <Fragment>
      <Nav  onVisible={isVisible}/>
      <Header />
      <Main refS={mainRef}/>
      <Footer />
    </Fragment>
  );
}

export default App;
