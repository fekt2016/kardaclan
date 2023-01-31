import React from "react";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
  return (

    <form className={classes.form}>
      <div className={classes["form-group"]}>
        <button className={classes.button}>for sale</button>
        <button className={classes.button}>for rent</button>
      </div>
      <div className={classes["form-group"]}>
        <input className={classes.input} id='search' type="search" placeholder="location...."/>
        <label className={classes.label} htmlFor="search">Search</label>
      </div>
    </form>
  );
};

export default SearchForm;
