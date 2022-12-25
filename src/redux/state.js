import {rerenderEntireTree} from '.././render';

let state = {
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
        ]
    },
    sidebar: {
        friends : [
            {id: 1, friend: 'Sasha'},
            {id: 2, friend: 'Boris'},
            {id: 3, friend: 'Pavel'}
          ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounts: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {   
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;
