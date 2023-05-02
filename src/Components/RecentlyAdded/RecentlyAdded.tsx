import React, { useEffect} from "react";
import Sidebar from "../Home/Sidebar/Sidebar";
import styles from "./RecentlyAdded.module.css";
import { useHandleAddToWishlist } from "../Wishlist/WishlistUtils";
import { useNavigate } from "react-router";
import { Movie } from "../../Types/HomeTypes";
import { getMoviesToDisplayRecent } from "./RecentlyAddedUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Types/types";
import { fetchMovies } from "../../Api/Api";
import { setSearchQuery } from "../../Actions/SidebarActions/SidebarActions";
import { localWishlistData } from "../../LocalStorageUtils/LocalStorageUtils";

export default function RecentlyAdded() {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const { handleAddToWishlist } = useHandleAddToWishlist();
  const searchQuery = useSelector((state: RootState) => state.sidebar.searchQuery);
  const navigate = useNavigate()
  const moviesToDisplayRecent = getMoviesToDisplayRecent(movies, searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovies() {
      const result = await fetchMovies();
      console.log(result);
    }
    getMovies();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const wishlistData = localWishlistData;
    const movieIdsInWishlist = wishlistData ? JSON.parse(wishlistData).map((movie: { id: number }) => movie.id) : [];

    moviesToDisplayRecent.forEach((movie: Movie) => {
      const starElement = document.getElementById(`star_${movie.id}`);
      if (movieIdsInWishlist.includes(movie.id) && starElement) {
        starElement.style.color = "red";
      }
    });
  }, [moviesToDisplayRecent]);

  function handleSearch(query: string) {
    dispatch(setSearchQuery(query));
    }

  const handleMovieCardClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const handleAddToWishlistClick = (movie: Movie, event: React.MouseEvent) => {
    handleAddToWishlist(movie, event);
  };

  return (
    <>
      <Sidebar onSearch={handleSearch} />
      <div className={styles.recentlyAddedContainer}>
        <div className={styles.recentlyAddedBody}>
          <h1 className={styles.sectionTitle}>Recently Added Movies</h1>
          <div className={styles.filmThumbIcon}>
            {moviesToDisplayRecent.map((movie: Movie) => (
              <div className={styles.filmThumbContainer} key={movie.id} onClick={() => handleMovieCardClick(movie.id)}>
                <img
                  className={styles.filmImage}
                  src={movie.image?.original}
                  alt={movie.name}
                />
                <span>
                  <i
                    className={`${styles.star} fa-solid fa-star`}
                    style={{ color: "white" }}
                    onClick={(event) => handleAddToWishlistClick(movie, event)}
                    id={`star_${movie.id}`}
                  ></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
