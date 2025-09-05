import MainHeader from "./MainHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTvShow from "../hooks/usePopularTvShow";
import useTopRatedTvShow from "../hooks/useTopRatedTvShow";   
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvShow();
  useTopRatedTvShow();

  return (
    <div className="h-screen flex flex-col">
      {/* Browser page Header */}
      {
        showGptSearch ? (
          <>
            <GptSearch />
          </>
        ) : (
          <>
            <MainHeader />
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }   
    </div>
  );
};
export default Browse;

