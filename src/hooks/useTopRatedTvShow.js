import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTvShow } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedTvShow = () => {
  const dispatch = useDispatch();
  //Fetch Data from TMDB API and update store
  const getTopRatedTvShow = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',  API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedTvShow(json.results));
  };
  useEffect(()=>{
    getTopRatedTvShow();
  },[]);
};
export default useTopRatedTvShow;