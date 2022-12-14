import classes from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog}>
      <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt="" className={classes.dialogImg}/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogsItems;