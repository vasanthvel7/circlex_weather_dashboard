import classes from "./Header.module.css";
import mainImg from "../../assets/png/main_logo.png";

function Header() {
  return (
    <div className={classes.headerSec}>
      <div className={classes.headerContainer}>
        <img alt="circlex_logo" src={mainImg} className={classes.mainLogo} />
      </div>
    </div>
  );
}

export default Header;
