import React, { useEffect } from "react";
import Sidebar from "../Home/Sidebar/Sidebar";
import styles from "./TopRated.module.css";
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Types/types";
import { getMoviesToDisplayTopRated } from "./TopRatedUtils";
import { setSearchQuery } from "../../Actions/SidebarActions/SidebarActions";
import StarIcon from "../StarIcon/StarIcon";

export default function RecentlyAdded() {
  const movies = useSelector((state: RootState) => state.movies);
  const searchQuery = useSelector((state: RootState) => state.sidebar.searchQuery);
  const moviesToDisplayTopRated = getMoviesToDisplayTopRated(movies, searchQuery);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const wishlistData = localStorage.getItem("wishlist") || "[]";
    const movieIdsInWishlist = wishlistData
      ? JSON.parse(wishlistData).map((movie: { id: number }) => movie.id)
      : [];

    moviesToDisplayTopRated.forEach((movie) => {
      const starElement = document.getElementById(`star_${movie.id}`);
      if (movieIdsInWishlist.includes(movie.id) && starElement) {
        starElement.style.color = "red";
      }
    });
  }, [moviesToDisplayTopRated]);

  function handleSearch(query: string) {
    dispatch(setSearchQuery(query));
    }

  const handleMovieCardClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <Sidebar onSearch={handleSearch} />
      <div className={styles.topRatedContainer}>
        <div className={styles.topRatedBody}>
          <h1 className={styles.sectionTitle}>Top Rated Movies</h1>
          <div className={styles.filmThumbIcon}>
            {moviesToDisplayTopRated.map((movie) => (
              <div className={styles.filmThumbContainer} key={movie.id} onClick={() => handleMovieCardClick(movie.id)}>
                <img
                  className={styles.filmImage}
                  src={movie.image?.original}
                  alt={movie.name}
                />
                <span>
                <StarIcon movie={movie} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
