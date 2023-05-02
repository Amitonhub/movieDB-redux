import React, { useEffect} from "react";
import Sidebar from "../Home/Sidebar/Sidebar";
import styles from "./RecentlyAdded.module.css";
import { useNavigate } from "react-router";
import { Movie } from "../../Types/HomeTypes";
import { getMoviesToDisplayRecent } from "./RecentlyAddedUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Types/types";
import { fetchMovies } from "../../Api/Api";
import { setSearchQuery } from "../../Actions/SidebarActions/SidebarActions";
import StarIcon from "../StarIcon/StarIcon";

export default function RecentlyAdded() {
  const movies = useSelector((state: RootState) => state.movies.movies);
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

  function handleSearch(query: string) {
    dispatch(setSearchQuery(query));
    }

  const handleMovieCardClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
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
