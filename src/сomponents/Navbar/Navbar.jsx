import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
      <div className={classes.nav}>
        <div>
          <NavLink to="/profile" className={({ isActive }) =>  isActive ? classes.active : undefined}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={({ isActive }) =>  isActive ? classes.active : undefined}>
            Messages
          </NavLink>
        </div>
        <div>
          <a href="#">
            News
          </a>
        </div>
        <div>
          <a href="#">
            Music
          </a>
        </div>
        <div>
          <a href="#">
            Settings
          </a>
        </div>
      </div>
    );
}

export default Navbar;