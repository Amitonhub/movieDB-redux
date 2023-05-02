import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer/Footer";
import styles from "./Home.module.css";
import Sidebar from "./Sidebar/Sidebar";
import HeadCard from "../HeadCard/HeadCard";
import { useNavigate } from "react-router";
import { fetchMovies } from "../../Api/Api";
import { useHandleAddToWishlist } from "../Wishlist/WishlistUtils";
import { Movie } from "../../Types/HomeTypes";
import { setMovies } from "../../Actions/MoviesActions/MoviesAction";
import { setSearchQuery } from "../../Actions/SidebarActions/SidebarActions";
import { RootState } from "../../Types/types";
import { getMoviesToDisplayRecent } from "../RecentlyAdded/RecentlyAddedUtils";
import { getMoviesToDisplayTopRated } from "../TopRated/TopRatedUtils";

const Home = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const searchQuery = useSelector( (state: RootState) => state.sidebar.searchQuery);
  const moviesToDisplayRecent = getMoviesToDisplayRecent(movies, searchQuery);
  const topRatedMovies = getMoviesToDisplayTopRated(movies, searchQuery);
  const { handleAddToWishlist } = useHandleAddToWishlist();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      const result = await fetchMovies();
      dispatch(setMovies(result));
      console.log(result);
    }
    getMovies();
  }, [dispatch]);

  useEffect(() => {
    const wishlistData = localStorage.getItem("wishlist") || "[]";
    const movieIdsInWishlist = wishlistData
      ? JSON.parse(wishlistData).map((movie: { id: number }) => movie.id)
      : [];

    moviesToDisplayRecent.forEach((movie: Movie) => {
      const starElement = document.getElementById(`star_${movie.id}`);
      if (movieIdsInWishlist.includes(movie.id) && starElement) {
        starElement.style.color = "red";
      }
    });

    topRatedMovies.forEach((movie: Movie) => {
      const starElement = document.getElementById(`star_${movie.id}`);
      if (movieIdsInWishlist.includes(movie.id) && starElement) {
        starElement.style.color = "red";
      }
    });
  }, [moviesToDisplayRecent, topRatedMovies]);

  function handleSearch(query: string) {
    dispatch(setSearchQuery(query));
  }

  const handleAddToWishlistClick = (movie: Movie, event: React.MouseEvent) => {
    handleAddToWishlist(movie, event);
  };

  function handleMovieCardClick(movieId: Movie) {
    navigate(`/movies/${movieId}`);
  }

  const recentMoreClick = () => {
    navigate("/recently-added");
  };

  const topRatedMoreClick = () => {
    navigate("/top-rated");
  };

  return (
    <div className={styles.bodyContainer}>
      <Sidebar onSearch={handleSearch} />
      <div className={styles.containerFilms1Parent}>
        <HeadCard />
        <div className={`${styles.container} ${styles.containerFilms11}`}>
          <div className={styles.sectionTitle}>
            {searchQuery ? "Search Results" : "Recently Added Films"}
          </div>
          <div>
            <p className={styles.recentlyMore} onClick={recentMoreClick}>
              More..
            </p>
          </div>
          <div className={styles.filmThumbIcon}>
            {moviesToDisplayRecent.slice(0, 12).map((movie: Movie) => (
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
        <div></div>
        <div className={styles.containerFilms1}>
          <div className={styles.topRatedTitle}>Top Rated Films</div>
          <div>
            <p className={styles.TopRatedMore} onClick={topRatedMoreClick}>
              More..
            </p>
          </div>
          <div className={styles.filmThumbIcon}>
            {topRatedMovies.slice(0, 12).map((movie: Movie) => (
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
                    className={`${styles.star} fa-solid fa-star`}
                    style={{ color: "white" }}
                    onClick={(event) => handleAddToWishlistClick(movie, event)}
                    id={`star_${movie.id}`}
                  ></i>
                </span>
              </div>
            ))}
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
