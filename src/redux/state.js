let store = {
    rerenderEntireTree () {
        console.log("State change");
    },

    state : {
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
            message: store.state.profilePage.newPostText,
            likesCounts: 0
        };
        store.state.profilePage.posts.push(newPost);
        store.state.profilePage.newPostText = '';
        store.rerenderEntireTree(store);
    },

    addMessage () {
        let newMessage = {
            id: 7,
            message: store.state.messagePage.newMessegasText
        };
        store.state.messagePage.messegas.push(newMessage);
        store.state.messagePage.newMessegasText = '';
        store.rerenderEntireTree(store);
    },

    updateNewPostText (newText){
        store.state.profilePage.newPostText = newText;
        store.rerenderEntireTree(store);
    },

    updateNewMessageText (newText) {   
        store.state.messagePage.newMessegasText = newText;
        store.rerenderEntireTree(store);
    },

    subscribe (observer) {
        store.rerenderEntireTree = observer;
    }
}

window.store = store;

export default store;
