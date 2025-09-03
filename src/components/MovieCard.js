import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({backdropPath, title}) => {
  return (
    <div className='relative w-72 h-40 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:border-2 hover:border-[#FF0000] hover:flex-grow'>
  <img 
    alt="Movie Backdrop" 
    className='w-full h-full object-cover rounded-lg transition-all duration-300'
    src={IMG_CDN_URL + backdropPath}
  />
  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2'>
    <div className='text-white font-serif text-xl pl-1'>{title}</div>
  </div>
</div>
  )
};

export default MovieCard;