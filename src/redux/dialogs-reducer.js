const ADD_MESSEGA = 'ADD-MESSEGA';
const UPDATE_NEW_MESSEGA_TEXT = 'UPDATE-NEW-MESSEGA-TEXT';

let initialState = {
    dialogs : [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Alexei'},
        {id: 4, name: 'Olya'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Gosh'}
    ],
    messegas : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Lorem'},
        {id: 3, message: 'Lorem ipsum dolor sit amet'},
        {id: 4, message: 'Lorem ipsum dolor sit amet consectetur'},
        {id: 5, message: 'Lorem, ipsum'},
        {id: 6, message: 'Lorem ipsum dolor sit'}
    ],
    newMessegasText : 'Новое сообщение'
}

const dialogsReducer = (state = initialState, action) => {
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