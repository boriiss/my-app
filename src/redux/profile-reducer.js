import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    posts : [
        {id: 1, message: 'Hello', likesCounts: 54},
        {id: 2, message: 'How are you?', likesCounts: 10},
        {id: 3, message: 'It\'s my first post', likesCounts: 12}
    ],
    newPostText : 'Тест',
    profile: null,
    isFetching: false
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
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }
        }
        case TOGGLE_IS_FETCHING: 
            return { 
                ...state, 
                isFetching: action.isFetching}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUserProfile = (userId) => {
    return (dispactch) => {

        dispactch(toggleIsFetching(true));

        userAPI.getUserProfile(userId).then(data => {
            dispactch(toggleIsFetching(false));
            dispactch(setUserProfile(data));
        });
    }
}

export default profileReducer;
