import { useState } from "react";
import logo from "../../asset/LOGONAME.png";
import Burger from "../Burger";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const [open, setOpen] = useState("");
  const clickHandler = (click) => {
    setOpen(click);
  };

  return (
    <>
      <nav className={`${classes.nav} ${props.onVisible && classes.stickyNav}`}>
        <img className={classes.logo} src={logo} alt="kardaclan logo" />
        <ul className={`${classes.list} ${!open && classes.listdisplay}`}>
          <li className={classes.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              home
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              about
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Project
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to="/media"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Media
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to="/mortgage"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              mortgage
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              contact
            </NavLink>
          </li>
        </ul>
        <Burger onClickHandler={clickHandler} />
      </nav>
    </>
  );
};

export default Nav;
