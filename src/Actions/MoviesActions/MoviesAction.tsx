import { Movie } from "../../Types/MovieTypes";
import { SET_MOVIES } from "../ActionTypes/MoviesActionTypes";

export const setMovies = (movies: Movie[]) => ({
  type: SET_MOVIES,
  payload: movies,
});