import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const video = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await video.json();
    console.log("Movie Videos", json);
    const findTrailers = json.results?.find((vid) => vid.type === "Trailer");
    console.log("Trailer", findTrailers);
    const trailer = findTrailers.length ? findTrailers[0] : json.results[0]; // if we don't find a trailer, use the first video
    console.log("Selected Trailer", trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(()=>{
    getMovieVideos();
  },[]);
};
export default useMovieTrailer;