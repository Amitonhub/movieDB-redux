import { SET_MOVIES } from "../../Actions/ActionTypes/MoviesActionTypes";

  
  const initialState = {
    movies: [],
  };
  
  const moviesReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_MOVIES:
        return {
          ...state,
          movies: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;