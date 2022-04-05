import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.active}>POČETNA</li>
        <li>STANJE</li>
        <li>ISTORIJA</li>
        <li>DODAJ</li>
      </ul>
    </nav>
  );
};

export default Navigation;
