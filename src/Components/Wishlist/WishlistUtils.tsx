import { Movie } from "../../Types/MovieTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovie,
  removeMovie,
} from "../../Actions/WishlistActions/WIshlistAction";
import { RootState } from "../../Types/types";
import { useRef } from "react";

export const useHandleAddToWishlist = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.wishlist);
  const starRef = useRef<HTMLSpanElement>(null);

  const handleAddToWishlist = (movie: Movie, event: React.MouseEvent) => {
    event.stopPropagation();

    const existingWishlist = localStorage.getItem("wishlist") || "[]";
    let updatedWishlist = JSON.parse(existingWishlist);
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user).userid : null;

    if (starRef.current) {
      starRef.current.style.color = "red";
    }

    const isMovieAdded = movies.some(
      (item: Movie) => item.id === movie.id && item.userId === userId
    );

    if (starRef.current && starRef.current.style.color === "red") {
      const filteredWishlist = updatedWishlist.filter(
        (item: Movie) => item.id !== movie.id || item.userId !== userId
      );
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      dispatch(removeMovie(movie.id));

      if (starRef.current) {
        starRef.current.style.color = "white";
      }

      return;
    }

    if (!isMovieAdded) {
      const updatedMovie = { ...movie, userId };
      updatedWishlist.push(updatedMovie);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      dispatch(addMovie(updatedMovie));
    } else {
      const filteredWishlist = updatedWishlist.filter(
        (item: Movie) => item.id !== movie.id || item.userId !== userId
      );
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      dispatch(removeMovie(movie.id));
    }
  };

  return { handleAddToWishlist, wishlist: movies, starRef };
};
