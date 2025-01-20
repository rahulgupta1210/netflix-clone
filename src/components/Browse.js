import React,{useEffect} from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import { SecondaryComponent } from './SecondaryComponent';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryComponent/>
      {/* 
        MainContainer
        -Videobackground
        -videotitle
        secondary container
         -movieslist*n
         -cards*n
      
      */

      }
    </div>
  )
}

export default Browse