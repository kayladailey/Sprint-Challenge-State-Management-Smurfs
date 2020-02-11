import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAIL,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL
  } from "../actions";
  
  const initialState = {
    smurfs: [],
    gettingSmurfs: false,
    postingSmurf: false,
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
      switch (action.type) {
      case GET_SMURFS_START:
        return {
          ...state,
          gettingSmurfs: true,
          error: ""
        };
      case GET_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          gettingSmurfs: false,
          error: ""
        };
      case GET_SMURFS_FAIL:
        return {
          ...state,
          gettingSmurfs: false,
          error: action.payload
        };
      case POST_SMURF_START:
        return {
          ...state,
          postingSmurf: true
        };
      case POST_SMURF_SUCCESS:
        return {
          ...state,
          postingSmurf: false,
          smurfs: action.payload
        };
      case POST_SMURF_FAIL:
        return {
          ...state,
          postingSmurf: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;