const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSEGA = 'ADD-MESSEGA';
const UPDATE_NEW_MESSEGA_TEXT = 'UPDATE-NEW-MESSEGA-TEXT';


let store = {
    _callSubscriber () {
        console.log("State change");
    },

    getState() {
        return this._state;
    },

    _state : {
        profilePage: {
            posts : [
                {id: 1, message: 'Hello', likesCounts: 54},
                {id: 2, message: 'How are you?', likesCounts: 10},
                {id: 3, message: 'It\'s my first post', likesCounts: 12}
            ],
            newPostText : 'Тест'
        },
        messagePage : {
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
        },
        sidebar: {
            friends : [
                {id: 1, friend: 'Sasha'},
                {id: 2, friend: 'Boris'},
                {id: 3, friend: 'Pavel'}
            ]
        }
    },

    addPost () {
        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likesCounts: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    addMessage () {
        let newMessage = {
            id: 7,
            message: this._state.messagePage.newMessegasText
        };
        this._state.messagePage.messegas.push(newMessage);
        this._state.messagePage.newMessegasText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    updateNewMessageText (newText) {   
        this._state.messagePage.newMessegasText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCounts: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSEGA') {
            let newMessage = {
                id: 7,
                message: this._state.messagePage.newMessegasText
            };
            this._state.messagePage.messegas.push(newMessage);
            this._state.messagePage.newMessegasText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSEGA-TEXT') {
            this._state.messagePage.newMessegasText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const  addMessageActionCreator = () =>  ({type: ADD_MESSEGA})
  
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSEGA_TEXT, newText: text})

window.store = store;

export default store;
