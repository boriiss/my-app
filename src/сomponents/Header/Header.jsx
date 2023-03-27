import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <div className={classes.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwjjXEEAabj31k9UdorR7XaxweOnen8imwA&usqp=CAU" alt="" />
        <div className={classes.loginBlock}>
          {props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </div>
    );
}

export default Header;