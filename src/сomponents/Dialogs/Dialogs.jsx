import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messegas from './Messegas/Messegas';

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} /> );
    let messegasElements = state.messegas.map( m => <Messegas message={m.message} /> );
    let newMessegasText = state.newMessegasText;

    let onAddMessageClick = () => {
      props.addMessage();
    }

    let onMessageChange = (e) => {
      let text = e.target.value;
      props.updateNewMessageBody(text);
    }

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messegas}>
          {messegasElements}
          <textarea cols="100" rows="4" className={classes.messegasTextarea} onChange={onMessageChange} value={newMessegasText} ></textarea>
          <button onClick={onAddMessageClick}>Send</button>
        </div>
      </div>
    );
}

export default Dialogs;