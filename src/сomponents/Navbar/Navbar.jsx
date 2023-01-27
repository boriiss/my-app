import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from './Friend/Friend';


const Navbar = (props) => {
  let state = props.sidebar;

  let friendElements = state.friends.map( f => <Friend friend={f.friend} id={f.id} /> );

  return (
    <div className={classes.nav}>
      <div>
        <NavLink to="/profile" className={({ isActive })=> isActive ? classes.active : undefined}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={({ isActive })=> isActive ? classes.active : undefined}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={({ isActive })=> isActive ? classes.active : undefined}>
          Users
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
      <h3 className={classes.friendsTitle}>Friends</h3>
      <div className={classes.friendsWrapper}>
        {friendElements}
      </div>
    </div>
  );
}

export default Navbar;