import { useState } from "react";
import logo from "../../asset/LOGONAME.png";
import Burger from "../Burger";
import classes from "./Nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState('')
  const clickHandler = (click) => {
   setOpen(click);
  };

  return (
    <>
      <nav className={classes.nav}>
        <img className={classes.logo} src={logo} alt="kardaclan logo" />
        <ul className={`${classes.list} ${!open && classes.listdisplay }`}>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              home
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              about
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              Project
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              Media
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              mortagage
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              contact
            </a>
          </li>
        </ul>
        <Burger onClickHandler={clickHandler} />
      </nav>
    </>
  );
};

export default Nav;
