import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="px-2 ">
      <h1 className="text-xl font-serif mt-2 ml-14 text-white">{title}</h1>
      <div className="relative group ">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 
                     bg-black bg-opacity-50 text-white p-3 rounded-full z-10 
                     opacity-0 group-hover:opacity-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FF0000" className="w-10 h-10"><path d="M560-280 360-480l200-200v400Z"/></svg>
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar overflow-visible ml-10 space-x-4 py-2 px-4 scroll-smooth "
        >
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              backdropPath={movie.backdrop_path}
              title={movie.title || movie.name}
            />
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 
                     bg-black bg-opacity-50 text-white p-3 rounded-full z-10 
                     opacity-0 group-hover:opacity-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FF0000" className="w-10 h-10"><path d="M400-280v-400l200 200-200 200Z"/></svg>
        </button>
      </div>
    </div>
  );
};
export default MovieList;