import { useEffect, useMemo, useState } from "react";
import { Card } from "./Card";
import "./Movie.css";

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [usrInput, setUserInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // fetching the movie data
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("https://jsonfakery.com/movies/random/8");
        if (!res.ok) {
          throw new Error(`failed to load data: ${res.status}`);
        }
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError("failed to load data");
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(usrInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [usrInput]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [movies, searchTerm]);

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="movie-container">
      <h2>My Movies</h2>
      <input
        type="text"
        placeholder="Search for movies..."
        value={usrInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div className="my-movies">
        {filteredMovies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.original_title}
            overview={movie.overview}
            language={movie.original_language}
            release_date={movie.release_date}
          />
        ))}
      </div>
      {filteredMovies.length === 0 && (
        <div>We couldn't find what you were looking for</div>
      )}
    </div>
  );
}
