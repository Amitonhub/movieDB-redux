import { useSelector } from "react-redux";
import { RootState } from "../../Types/types";
import { useHandleAddToWishlist } from "../Wishlist/WishlistUtils";
import { Movie } from "../../Types/HomeTypes";
import styles from "../Home/Home.module.css";
import { useRef } from "react";

interface StarIconProps {
  movie: Movie;
}

const StarIcon = ({ movie }: StarIconProps) => {
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const { handleAddToWishlist } = useHandleAddToWishlist();
  const starRef = useRef<HTMLSpanElement>(null);

  const handleClick = (event: React.MouseEvent) => {
    handleAddToWishlist(movie, event);
  };

  const isMovieInWishlist = wishlist.some(
    (wishedMovie) => wishedMovie.id === movie.id
  );

  return (
    <i
      ref={starRef}
      className={`${styles.star} fa-solid fa-star`}
      style={{ color: isMovieInWishlist ? "red" : "white" }}
      onClick={handleClick}
    ></i>
  );
};

export default StarIcon;
