import { profileAPI, usersAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts : [
        {id: 1, message: 'Hello', likesCounts: 54},
        {id: 2, message: 'How are you?', likesCounts: 10},
        {id: 3, message: 'It\'s my first post', likesCounts: 12}
    ],
    profile: null,
    isFetching: false,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPostText = action.newPostText;

            return {
                ...state,
                posts: [...state.posts, { id: 7, message: newPostText, likesCounts: 3}],
                newPostText: ''
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

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispactch) => {
    const response = await usersAPI.getProfile(userId);
    dispactch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispactch) => {
    const response = await profileAPI.getStatus(userId);
    dispactch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispactch) => {
    const response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){
        dispactch(setStatus(status));
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default profileReducer;
