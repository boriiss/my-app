import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});
export const getAuthUserData = () => async (dispactch) => {
  let response = await authAPI.me();
    
  if(response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispactch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememerMe) => async (dispactch) => {
  let response = await authAPI.login(email, password, rememerMe);

  if(response.data.resultCode === 0) {
    dispactch(getAuthUserData());
  }else{
    let message = response.data.messages.length > 0 ? response.data.messages : "Some error";
    dispactch(stopSubmit("login", {_error: message}));
  }
}

export const logout = () => async (dispactch) => {
  let response = await authAPI.logout();

  if(response.data.resultCode === 0) {
      dispactch(setAuthUserData(null, null, null, false)); 
  }
}

export default authReducer;
