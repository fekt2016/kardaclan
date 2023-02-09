import React from "react";
import classes from "./Footer.module.css";
import logo from "../../asset/LOGONAME.png";
import IconFacebook from "../../UI/SVG/IconFaceBook";
import IconInstagram from "../../UI/SVG/IconInstagram";
import IconWhatsapp from "../../UI/SVG/IconWhatsapp";
import IconTwitter from "../../UI/SVG/IconTwitter";
import IconYoutube from "../../UI/SVG/IconYouTube";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img className={classes.logo} src={logo} alt="footer logo" />
          <div className={classes.social}>
            <IconFacebook color="#3b5998" width="32px" height="32px"/>
            <IconInstagram color="#d62976" width="32px" height="32px" />
            <IconWhatsapp color="#075e54" width="32px" height="32px"/>
            <IconTwitter color="#00acee" width="32px" height="32px"/>
            <IconYoutube color="c4302b" width="32px" height="32px"/>
          </div>
        </div>
        <div className={classes.right}>
          <ul className={classes.list}>
            <li className={`${classes.item} ${classes.bold}`}>contact: </li>
            <li className={classes.item}>+233 244388190</li>
            <li className={classes.item}>+233 235222207</li>
            <li className={classes.item}>+1 6146701490</li>
          </ul>
          <ul className={classes.list}>
            <li className={`${classes.item} ${classes.bold}`}>Address: </li>
            <li className={classes.item}>Nima highway street</li>
            <li className={classes.item}>E1/12 Nima-Accra</li>
            <li className={classes.item}>Ghana</li>
          </ul>
          <ul className={classes.list}>
            <li className={classes.item}> <a href="/" className={classes.link}>home</a> </li>
            <li className={classes.item}><a href='/' className={classes.link}>about Us </a></li>
            <li className={classes.item}><a href="/" className={classes.link}>project</a> </li>
            <li className={classes.item}><a href="/" className={classes.link}>media</a> </li>
          </ul>
        </div>
      </div>
      <div>About Us | Projects | House For Sale | House For Rent | Gallery | Contact
 Copyright © 2023 Kclan Homes & Construction Ltd. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
