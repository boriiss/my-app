import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messegas from './Messegas/Messegas';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} /> );
    let messegasElements = state.messegas.map( m => <Messegas message={m.message} /> );
    let newMessegasText = state.newMessegasText;

    let addNewMessage = (values) => {
      props.addMessage(values.newMessageBody);
    }

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messegas}>
          {messegasElements}
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;