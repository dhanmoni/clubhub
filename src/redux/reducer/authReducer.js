import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT,
    SET_LOADING
  } from "../action/types";
  
  const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case REGISTER_USER:
        return {
          ...state,
          user: payload,
          isAuthenticated: true,
          loading: false,
        };
      case LOGIN_USER:
        return {
          ...state,
          user: payload,
          isAuthenticated: true,
          loading: false,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          user: null,
        };
    case SET_LOADING:{
        return {
            ...state,
            loading: true
        }

    }
      default:
        return state;
    }
  }
  