import React from "react";
import ContactForm from "./ContactForm";
import classes from "./Contact.module.css";
import ContactDetail from "./ContactDetail";

const Contact = () => {
  return (
    <main className={classes.contact}>
      <div className={classes.header}>
        <h1>Contact Me</h1>
      </div>
      <div className={classes["main-box"]}>
        <ContactForm />
        <ContactDetail />
      </div>
    </main>
  );
};

export default Contact;
