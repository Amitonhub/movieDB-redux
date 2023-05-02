import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Home/Sidebar/Sidebar";
import styles from "./MovieDetails.module.css";
import MovieRatings from "./MovieRatings/MovieRatings";
import { CastMember} from "../../Types/MovieTypes";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../Actions/MovieDetailsActions/MovieDetailsActions";
import { RootState } from "../../Types/types";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const movie = useSelector((state: RootState) => state.movieDetails[0]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await fetch(
          `https://api.tvmaze.com/shows/${id}?embed=cast`
        );
        const movieJson = await movieData.json();
        dispatch(fetchMovieDetails(movieJson))
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovie();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [dispatch, id]);

  function handleSearch(query: string) {
    return;
  }

  return (
    <>
      <Sidebar onSearch={handleSearch} />
      <div className={styles.movieDetailsContainer}>
        {movie ? (
          <div className={styles.movieDetailsBody}>
            <h1 className={styles.sectionTitle}>Movie Details</h1>
            <div className={styles.filmThumbIcon}>
              <div className={styles.filmThumbContainer}>
                <img
                  className={styles.filmImage}
                  src={movie.image?.medium}
                  alt="movie"
                />
              </div>
              <div className={styles.moiveDetails}>
                <MovieRatings rating={movie.rating.average} maxRating={10} />
                <h1 className={styles.movieTitle}>{movie.name}</h1>
                <p className={styles.movieSummary}>
                  {movie.summary.split(" ").slice(0, 120).join(" ")}...
                </p>
                <div>
                  <div className={styles.showInfoContainer}>
                    <h2 className={styles.showInfoTitle}>Show Info</h2>
                    <br />
                    <div className={styles.showInfoCategories}>
                      <span>
                        <h4 className={styles.streamedOn}>Streamed on</h4>
                        <h4 className={styles.streamedOnData}>
                          {movie.network.name}
                        </h4>
                        <div className={styles.underline}></div>
                        <h4 className={styles.schedule}>Schedule</h4>
                        <h4 className={styles.scheduleData}>
                          {movie.schedule.time},{movie.schedule.days}
                        </h4>
                        <div className={styles.underline}></div>
                        <h4 className={styles.status}>Status</h4>
                        <h4 className={styles.statusData}>{movie.status}</h4>
                        <div className={styles.underline}></div>
                        <h4 className={styles.genres}>Genres </h4>
                        <h4 className={styles.genresData}>
                          {movie.genres.join(", ")}
                        </h4>
                        <div className={styles.underline}></div>
                      </span>
                    </div>
                  </div>
                  <div className={styles.starringTitle}>
                    <h2 className={styles.starringHeading}>Starring</h2>
                    <br />
                    <span className={styles.starringSpan}>
                      {movie._embedded.cast.map((castMember: CastMember) => (
                        <div
                          key={castMember.character.id}
                          className={styles.castItem}
                        >
                          <img
                            src={castMember.character.image?.medium}
                            alt={
                              castMember.character.image?.medium
                                ? castMember.character.name
                                : `${castMember.character.name
                                    .split(" ")[0]
                                    .charAt(0)}${castMember.character.name
                                    .split(" ")[1]
                                    ?.charAt(0)}`
                            }
                            className={styles.castImage}
                          />
                          <h4 className={styles.castName}>
                            {castMember.character.name}
                          </h4>
                          <div className={styles.starringUnderline}></div>
                        </div>
                      ))}
                      <div className={styles.underline}></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
