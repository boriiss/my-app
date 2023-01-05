import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;

    let onAddMessageClick = () => {
      props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageActionCreator(text));
    }

  return (<Dialogs updateNewMessageBody={onMessageChange} addMessage={onAddMessageClick} messagePage={state}/>);
}

export default DialogsContainer;