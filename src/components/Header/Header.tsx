import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import mainImg from "../../assets/png/main_logo.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.headerSec}>
      <div className={classes.headerContainer}>
        <img src={mainImg} className={classes.mainLogo} />
      </div>
    </div>
  );
}

export default Header;
