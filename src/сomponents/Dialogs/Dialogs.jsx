import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messegas from './Messegas/Messegas';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} /> );
    let messegasElements = props.state.messegas.map( m => <Messegas message={m.message} /> );

    let newMessegaElement = React.createRef();

    let addMessage = () => {
      props.dispatch({ type: 'ADD-MESSEGA' });
    }

    let onMessageChange = () => {
      let text = newMessegaElement.current.value;
      let action = { type: 'UPDATE-NEW-MESSEGA-TEXT', newText: text };
      props.dispatch(action);
    }

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messegas}>
          {messegasElements}
          <textarea cols="100" rows="4" className={classes.messegasTextarea} ref={newMessegaElement} onChange={onMessageChange} value={props.state.newMessegasText} ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    );
}

export default Dialogs;