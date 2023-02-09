import React from "react";
import SearchForm from "../../components/SearchForm";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.formbox}>
        <h1 className={classes.h1}>Find your dream home </h1>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
