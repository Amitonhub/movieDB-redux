import { MOVIE_DETAILS } from "../../Actions/ActionTypes/MovieDetailsActionTypes";
import { Movie } from "../../Types/HomeTypes";

const initialState: Movie[] = [];
  
  const movieDetailsReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case MOVIE_DETAILS:
        return [action.payload];
      default:
        return state;
    }
  };

  export default movieDetailsReducer;
