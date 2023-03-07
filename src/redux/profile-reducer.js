import { profileAPI, usersAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts : [
        {id: 1, message: 'Hello', likesCounts: 54},
        {id: 2, message: 'How are you?', likesCounts: 10},
        {id: 3, message: 'It\'s my first post', likesCounts: 12}
    ],
    newPostText : 'Тест',
    profile: null,
    isFetching: false,
    status: ""
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
        case SET_STATUS: {

            return {
                ...state,
                status: action.status
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
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispactch) => {
    usersAPI.getProfile(userId).then(response => {
        dispactch(setUserProfile(response.data));
      });
}
export const getStatus = (userId) => (dispactch) => {
    profileAPI.getStatus(userId).then(response => {
        dispactch(setStatus(response.data));
      });
}
export const updateStatus = (status) => (dispactch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispactch(setStatus(status));
            }
      });
}
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default profileReducer;
