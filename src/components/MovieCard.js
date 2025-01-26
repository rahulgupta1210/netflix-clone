import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-72'>
        <img className='w-3/8 pr-4'
        alt='Movie Card'
        src={IMG_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard