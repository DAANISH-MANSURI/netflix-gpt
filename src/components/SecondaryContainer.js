import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return (
    <div className="bg-black mt-30">
      <div className="-mt-40  relative z-20">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Popular Movies" movies={movies?.popularMovies} />
      <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      <MovieList title="Popular TV Shows" movies={movies?.popularTvShow} />
      <MovieList title="Top Rated TV Shows" movies={movies?.topRatedTvShow} />
      </div>
    </div>
  )
};

export default SecondaryContainer;