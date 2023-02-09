import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={classes.formbox}>
      <h2> send me a message</h2>
      <form className={classes.form}>
        <div className={classes["form-group"]}>
          <label htmlFor="email"> enter your email</label>
          <input id="email" type="text" />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="tel"> enter your cell phone</label>
          <input id="tel" type="tel" />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="textarea"> your message</label>
          <textarea id="textarea" placeholder="i have a question" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
