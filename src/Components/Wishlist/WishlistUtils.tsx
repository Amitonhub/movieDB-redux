import { Movie } from "../../Types/HomeTypes";
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

    if (starRef.current && starRef.current.style.color === "red") {
      dispatch(removeMovie(movie.id));

      if (starRef.current) {
        starRef.current.style.color = "white";
      }

      const filteredWishlist = updatedWishlist.filter(
        (item: Movie) => item.id !== movie.id
      );
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      return;
    }

    const updatedMovie = { ...movie, userId };
    updatedWishlist.push(updatedMovie);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    dispatch(addMovie(updatedMovie));
  };

  return { handleAddToWishlist, wishlist: movies, starRef };
};
