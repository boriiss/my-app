import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <div className={classes.dialog + ' ' + classes.active}><NavLink to="/dialogs/1">Dima</NavLink></div>
          <div className={classes.dialog}><NavLink to="/dialogs/2">Sasha</NavLink></div>
          <div className={classes.dialog}><NavLink to="/dialogs/3">Alexei</NavLink></div>
          <div className={classes.dialog}><NavLink to="/dialogs/4">Olya</NavLink></div>
          <div className={classes.dialog}><NavLink to="/dialogs/5">Ivan</NavLink></div>
          <div className={classes.dialog}><NavLink to="/dialogs/6">Gosh</NavLink></div>
        </div>
        <div className={classes.messegas}>
          <div className={classes.message}>Hello</div>
          <div className={classes.message}>Lorem.</div>
          <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
          <div className={classes.message}>Lorem ipsum dolor sit amet consectetur.</div>
          <div className={classes.message}>Lorem, ipsum.</div>
          <div className={classes.message}>Lorem ipsum dolor sit.</div>
        </div>
      </div>
    );
}

export default Dialogs;