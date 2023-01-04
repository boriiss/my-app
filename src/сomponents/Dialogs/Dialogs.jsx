import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messegas from './Messegas/Messegas';

const Dialogs = (props) => {

    let state = props.store.getState().messagePage;

    let dialogsElements = state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} /> );
    let messegasElements = state.messegas.map( m => <Messegas message={m.message} /> );

    let addMessage = () => {
      let action = addMessageActionCreator();
      props.store.dispatch(action);
    }

    let onMessageChange = (e) => {
      let text = e.target.value;
      let action = updateNewMessageActionCreator(text);
      props.store.dispatch(action);
    }

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messegas}>
          {messegasElements}
          <textarea cols="100" rows="4" className={classes.messegasTextarea} onChange={onMessageChange} value={state.newMessegasText} ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    );
}

export default Dialogs;