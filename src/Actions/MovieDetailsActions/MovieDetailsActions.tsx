import { Movie } from "../../Types/MovieTypes";
import { MOVIE_DETAILS } from "../ActionTypes/MovieDetailsActionTypes";

export const fetchMovieDetails = (movie: Movie) => {
    return {
      type: MOVIE_DETAILS,
      payload: movie
    };
  };