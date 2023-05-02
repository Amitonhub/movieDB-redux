import { Movie } from "../../Types/MovieTypes";

export function getMoviesToDisplayTopRated(movies: Movie[], searchQuery: string): Movie[] {
    let moviesToDisplay = [...movies].sort(
      (a, b) => b.rating - a.rating
    );
    if (searchQuery) {
      moviesToDisplay = moviesToDisplay.filter((movie) =>
        movie.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return moviesToDisplay;
  }