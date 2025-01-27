import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux';
//import openai from '../utils/openai';
import { movieOption } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';


const GptSearchBar = () => {
    //console.log('language',language)
    const langkey = useSelector(store=>store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch(null);

    //movies search using GPT
    const searchMovieTMDB = async(moviename)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1`, movieOption);
        const json = await data.json();
        return json.results;
      
    }

    const handleGptSearchClick = async () => {
        console.log('searchText',searchText.current.value);
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" +  searchText.current.value + '. only give me names of 5 movies , comma separated like the example result given ahead.Example results: Gadar,Sholay,Don,Golmaal,Koi Mil Gya';

        // const gptResults1 = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });

          const gptResults = {
            choices: [
              {
                message: {
                  content: "Gadar,Sholay,Don,Golmaal,Koi Mil Gya",
                },
              },{}]
          };
          console.log('gptResults',gptResults.choices?.[0]?.message?.content.split(','));
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

          const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));

          const tmdbResults = await Promise.all(promiseArray);
          console.log('tmdbResults',tmdbResults);
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));



         
         
    }
    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className= 'w-full md:w-1/2 bg-black  grid grid-cols-12'onSubmit={(e)=>e.preventDefault()} >
                <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[langkey]?.gptSearchPlaceholder} ref = {searchText}/>
                <button type="submit"className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'
                onClick={handleGptSearchClick}
                >{lang[langkey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar