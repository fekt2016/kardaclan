import { useState} from "react";
import logo from "../../asset/LOGONAME.png";
import Burger from "../Burger";
import classes from "./Nav.module.css";
import {Link} from 'react-router-dom';

const Nav = (props) => {

  const [open, setOpen] = useState("");
  const clickHandler = (click) => {
    setOpen(click);
  };

  return (
    <>
      <nav  className={`${classes.nav} ${props.onVisible && classes.stickyNav}`}>
        <img className={classes.logo} src={logo} alt="kardaclan logo" />
        <ul className={`${classes.list} ${!open && classes.listdisplay}`}>
          <li className={classes.item}>
            <Link className={classes.link} to="/">
              home
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/aboutus">
              about
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/project">
              Project
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/media">
              Media
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/mortgage">
              mortgage
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/contact">
              contact
            </Link>
          </li>
        </ul>
        <Burger onClickHandler={clickHandler} />
      </nav>
    </>
  );
};

export default Nav;
