import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case TOGGLE_IS_FETCHING: {

            return { 
                ...state, 
                profile: action.profile
            }
        }
        case SAVE_PHOTO_SUCCESS: {

            return { 
                ...state, profile: {...state.profile, photos: {...state.profile.photos, large: action.photos.large}}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

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

export const savePhoto = (file) => async (dispactch) => {
    const response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispactch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispactch, getState) => {
    const userId = getState().auth.id;
    debugger
    const response = await profileAPI.saveProlife(profile);
    if(response.data.resultCode === 0){
        dispactch(getUserProfile(userId));
    } else {
        dispactch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default profileReducer;
