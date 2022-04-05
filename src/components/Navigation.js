import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            className={classes.link}
            to='/pocetna'
            activeClassName={classes.active}
          >
            POČETNA
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.link}
            to='/stanje'
            activeClassName={classes.active}
          >
            STANJE
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.link}
            to='/istorija'
            activeClassName={classes.active}
          >
            ISTORIJA
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.link}
            to='/dodaj'
            activeClassName={classes.active}
          >
            DODAJ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
