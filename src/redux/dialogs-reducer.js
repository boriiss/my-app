const ADD_MESSEGA = 'ADD-MESSEGA';
const UPDATE_NEW_MESSEGA_TEXT = 'UPDATE-NEW-MESSEGA-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSEGA:
            let newMessegasText = state.newMessegasText;
            state.newMessegasText = '';
            state.messegas.push({ id: 7, message: newMessegasText});
            return state;
        case UPDATE_NEW_MESSEGA_TEXT: 
            state.newMessegasText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const  addMessageActionCreator = () =>  ({type: ADD_MESSEGA})
  
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSEGA_TEXT, newText: text})

export default dialogsReducer;