import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  // const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return null; // isko early return karna hai ydi movie nahi hai to.
  const mainMovie = movies[3];
  const {title, overview, id} = mainMovie;
  console.log("mainMovie", mainMovie);
  return (
    <div className='pt-[64px]'>
      <div className='relative w-full aspect-video border border-black'>
       <VideoBackground movieId={id} />
       <div className='absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-black via-transparent to-black'>
         <VideoTitle title={title} overview={overview} />
       </div>
      </div>
    </div>
  );
};

export default MainContainer;