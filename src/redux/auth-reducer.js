import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'; //'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS: 
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => async (dispactch) => {
  let response = await authAPI.me();
    
  if(response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispactch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememerMe, captcha) => async (dispactch) => {
  let response = await authAPI.login(email, password, rememerMe, captcha);

  if(response.data.resultCode === 0) {
    dispactch(getAuthUserData());
  } else {
    if(response.data.resultCode === 10) {
      dispactch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages : "Some error";
    dispactch(stopSubmit("login", {_error: message}));
  }
}

export const getCaptchaUrl = () => async (dispactch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispactch(getCaptchaUrlSuccess(captchaUrl));
  }

export const logout = () => async (dispactch) => {
  let response = await authAPI.logout();

  if(response.data.resultCode === 0) {
      dispactch(setAuthUserData(null, null, null, false)); 
  }
}

export default authReducer;
