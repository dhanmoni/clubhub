import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT,
    SET_LOADING,
    GET_ALL_CLUBS
  } from "../action/types";
  
  const initialState = {
    clubs: []
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case GET_ALL_CLUBS:
        return {
          ...state,
          clubs: payload
        };
      
      default:
        return state;
    }
  }
  