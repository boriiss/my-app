import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);