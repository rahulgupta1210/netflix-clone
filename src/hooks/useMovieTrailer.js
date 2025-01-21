

import { useEffect } from 'react';
import { movieOption } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addTrailerVideo} from "../utils/moviesSlice";


const useMovieTrailer = (movieId)=>{
      const dispatch = useDispatch();
    
    const getMoviesVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, movieOption);
        //const data = await fetch('https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US', movieOption);
        const videoData = await data.json();
        //console.log('videoData',videoData);
    
        const filterdata = videoData.results.filter((video)=>video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0]:videoData.results[0];
        console.log('trailer',trailer);
        dispatch(addTrailerVideo(trailer));
       // setTrailerId(trailer.key);
         
      }
    
      useEffect(() => {
        getMoviesVideo();
      }, [])
}

export default useMovieTrailer;