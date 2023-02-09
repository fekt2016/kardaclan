import React from "react";
import classes from "./ContactDetail.module.css";
import IconAddress from "../../../UI/SVG/IconAddress";
import IconBxMailSend from "../../../UI/SVG/IconBxMailSend";
import IconBxTime from "../../../UI/SVG/IconBxTime";
import IconCallOutline from "../../../UI/SVG/IconCallOutline";
import IconFacebook from "../../../UI/SVG/IconFaceBook";
import IconFax from "../../../UI/SVG/IconFax";
import IconInstagram from "../../../UI/SVG/IconInstagram";
import IconTwitter from "../../../UI/SVG/IconTwitter";
import IconYoutube from "../../../UI/SVG/IconYouTube";
import IconWhatsapp from "../../../UI/SVG/IconWhatsapp";
import IconTeam from "../../../UI/SVG/IconTeam";

const ContactDetail = () => {
  return (
    <div className={classes.detail}>
      <h2> contact information</h2>
      <div className={classes.phone}>
        <div className={classes.iconbox}>
          <span className={classes["con-icon"]}>
            <IconBxMailSend color='#cd9933' width="30px" height="30px" />
          </span>
          <span>fekt2016@icloud.com</span>
        </div>
        <div className={classes.iconbox}>
          <span className={classes["con-icon"]}>
            <IconCallOutline color='#cd9933' width="30px" height="30px" />
          </span>
          <span>call: 0244388190</span>
        </div>
        <div className={classes.iconbox}>
          <span className={classes["con-icon"]}>
            <IconAddress color='#cd9933' width="30px" height="30px" />
          </span>
          <span>address</span>
        </div>
        <div className={classes.iconbox}>
          <span className={classes["con-icon"]}>
            <IconTeam color='#cd9933' width="30px" height="30px" />
          </span>
          <span>Team Directory</span>
        </div>
        <div className={classes.iconbox}>
          <span className={classes["con-icon"]}>
            <IconFax color='#cd9933'  width="30px" height="30px"/>
          </span>
          <span>fax: 0203 4566739</span>
        </div>
        <div className={classes.iconbox}>
          <span className={classes["con-icon"]}>
            <IconBxTime color='#cd9933' width="30px" height="30px" />
          </span>
          <span>Monday – Sunday: 9:00 a.m. – 9:00 p.m.</span>
        </div>
        <div className={classes.icon}>
          <IconFacebook color="£3b5998" width="25px" height="25px" />
          <IconInstagram color="£d62976" width="25px" height="25px" />
          <IconTwitter color="#075e54" width="25px" height="25px" />
          <IconWhatsapp color="#00acee" width="25px" height="25px" />
          <IconYoutube color="#c4302b" width="25px" height="25px" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
