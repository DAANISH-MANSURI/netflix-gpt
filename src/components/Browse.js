import MainHeader from "./MainHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTvShow from "../hooks/usePopularTvShow";
import useTopRatedTvShow from "../hooks/useTopRatedTvShow";   

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvShow();
  useTopRatedTvShow();

  return (
    <div className="h-screen flex flex-col">
      {/* Browser page Header */}
      <MainHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;

