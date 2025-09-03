import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTvShow } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularTvShow = () => {
  const dispatch = useDispatch();
  //Fetch Data from TMDB API and update store
  const getPopularTvShow = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',  API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addPopularTvShow(json.results));
  };
  useEffect(()=>{
    getPopularTvShow();
  },[]);
};
export default usePopularTvShow;