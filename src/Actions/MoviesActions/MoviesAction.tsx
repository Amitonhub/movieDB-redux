import { Movie } from "../../Types/HomeTypes";
import { SET_MOVIES } from "../ActionTypes/MoviesActionTypes";

export const setMovies = (movies: Movie[]) => ({
  type: SET_MOVIES,
  payload: movies,
});