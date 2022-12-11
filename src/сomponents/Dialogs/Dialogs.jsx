import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Messegas = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
}

const Dialogs = () => {

    let dialogsData = [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Sasha'},
      {id: 3, name: 'Alexei'},
      {id: 4, name: 'Olya'},
      {id: 5, name: 'Ivan'},
      {id: 6, name: 'Gosh'}
    ]

    let messegasData = [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'Lorem'},
      {id: 3, message: 'Lorem ipsum dolor sit amet'},
      {id: 4, message: 'Lorem ipsum dolor sit amet consectetur'},
      {id: 5, message: 'Lorem, ipsum'},
      {id: 6, message: 'Lorem ipsum dolor sit'}
    ]

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
        </div>
        <div className={classes.messegas}>
          <Messegas message={messegasData[0].message} id={messegasData[0].id} />
        </div>
      </div>
    );
}

export default Dialogs;