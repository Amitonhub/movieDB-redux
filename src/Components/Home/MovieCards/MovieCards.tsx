import MovieCard from "./MovieCard";
import HeadCard from "../../HeadCard/HeadCard";

export default function MovieCards() {
  return (
    <>
      <div className="container-films-1-parent">
        <HeadCard />
        <div className="container-films-11">
          <div className="section-title">Recently Added Films</div>
          <MovieCard />
        </div>
        <div className="container-films-1">
          <div className="section-title">Top Rated Films</div>
          <MovieCard />
        </div>
      </div>
    </>
  );
}
