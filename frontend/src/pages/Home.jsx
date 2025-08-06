import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avengers"); // default search

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/movies/search?query=${query}`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="border p-2 w-full max-w-md"
      />
      <button
        onClick={fetchMovies}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border p-2 rounded shadow-sm bg-white text-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="mx-auto mb-2"
            />
            <p className="text-sm font-medium">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
