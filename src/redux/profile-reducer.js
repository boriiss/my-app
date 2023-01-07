const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id: 1, message: 'Hello', likesCounts: 54},
        {id: 2, message: 'How are you?', likesCounts: 10},
        {id: 3, message: 'It\'s my first post', likesCounts: 12}
    ],
    newPostText : 'Тест'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText;

            return {
                ...state,
                posts: [...state.posts, { id: 7, message: newPostText, likesCounts: 3}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
