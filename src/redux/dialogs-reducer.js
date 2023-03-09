const ADD_MESSEGA = 'ADD-MESSEGA';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSEGA:
            let newMessageBody = action.newMessageBody;
            return { 
                ...state,
                messegas: [ ...state.messegas, { id: 7, message: newMessageBody}]
            };
        default: 
            return state;
    }
}

export const  addMessageActionCreator = (newMessageBody) =>  ({type: ADD_MESSEGA, newMessageBody})

export default dialogsReducer;