export default function MovieCard({ ...movie }) {
  return (
    <div className="film-thumb-icon">
      <img src={movie.image.medium} alt="" />
    </div>
  );
}
