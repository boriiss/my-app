import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from './../../StoreContext';

const DialogsContainer = (props) => {

  return (<StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState().messagePage;

        let onAddMessageClick = () => {
          store.dispatch(addMessageActionCreator());
        }
    
        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        }

        return  <Dialogs updateNewMessageBody={onMessageChange} addMessage={onAddMessageClick} messagePage={state}/>
      }
    }
  </StoreContext.Consumer>
  );
}
export default DialogsContainer;