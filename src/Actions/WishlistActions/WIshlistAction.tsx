import { Movie } from "../../Types/MovieTypes";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../ActionTypes/WishlistActionTypes";

export const addMovie = (movie: Movie) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: movie,
  };
};

export const removeMovie = (movieId: number) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: movieId,
  };
};
