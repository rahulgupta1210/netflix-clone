import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryComponent = () => {
  const movies = useSelector((state) => state.movies)
  return (
    movies.nowPlayingMovies && 
    (<div className='-mt-52 relative z-index-20 bg-black'>
      <div className='-mt-52 pl-12 relative z-index-20'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
     

    </div>
    )
  )
}
