import React from "react";
import classes from "./Header.module.css";
import bookStore from "../assets/book-store.png";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <img className={classes.img} src={bookStore} alt="Book Collector" />
      <h1>{props.headerContent}</h1>
      <p>{props.textContent}</p>
    </div>
  );
};

export default Header;
