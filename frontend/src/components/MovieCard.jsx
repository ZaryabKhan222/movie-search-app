const MovieCard = ({ movie }) => {
  const imageBase = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={movie.poster_path ? imageBase + movie.poster_path : '/placeholder.jpg'}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
