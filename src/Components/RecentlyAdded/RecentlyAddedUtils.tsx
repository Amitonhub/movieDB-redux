import { Movie } from "../../Types/MovieTypes";

export function getMoviesToDisplayRecent(movies: Movie[], searchQuery: string): Movie[] {
  let sortedMovies = [...movies];
  sortedMovies.sort((a, b) => {
    const dateA = new Date(a.premiered).getTime();
    const dateB = new Date(b.premiered).getTime();
    return dateB - dateA;
  });

  if (searchQuery) {
    sortedMovies = sortedMovies.filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return sortedMovies;
}