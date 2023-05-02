import styles from "./Wishlist.module.css";
import Sidebar from "../Home/Sidebar/Sidebar";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../Actions/SidebarActions/SidebarActions";
import { removeMovie } from "../../Actions/WishlistActions/WIshlistAction";
import { RootState } from "../../Types/types";
import { localUserId } from "../../LocalStorageUtils/LocalStorageUtils";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const userId = localUserId;
  const filteredMovies = wishlist.filter((movie) => movie.userId === userId);

  function handleSearch(query: string) {
    dispatch(setSearchQuery(query));
  }

  const handleRemove = (movieId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedWishlist = wishlist.filter((movie) => movie.id !== movieId);
    dispatch(removeMovie(movieId));
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleMovieCardClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <Sidebar onSearch={handleSearch} />
      <div className={styles.wishlistContainer}>
        <div className={styles.wishlistBody}>
          <h1 className={styles.sectionTitle}>My Wishlist</h1>
          <div className={styles.filmThumbIcon}>
            {filteredMovies.map((movie) => (
              <div
                className={styles.filmThumbContainer}
                key={movie.id}
                onClick={() => handleMovieCardClick(movie.id)}
              >
                <img
                  className={styles.filmImage}
                  src={movie.image?.original}
                  alt={movie.name}
                />
                <span>
                  <i
                    className={`${styles.remove} fa-solid fa-trash`}
                    onClick={(event) => handleRemove(movie.id, event)}
                  ></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
