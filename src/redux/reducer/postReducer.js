import {
    ADD_POST,
    GET_ALL_POSTS,
    DELETE_POST
  } from "../action/types";
  
  const initialState = {
    loading: false,
    posts:[]
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case ADD_POST:
        return {
          ...state,
          loading: false,
        };

    case GET_ALL_POSTS:
        return {
            ...state,
            posts: payload,
          loading: false,
        }
      default:
        return state;
    }
  }
  