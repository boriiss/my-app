import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
  globalError: null
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispactch) => {
  let promise = dispactch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispactch(initializedSuccess());
    });
}

export default appReducer;
