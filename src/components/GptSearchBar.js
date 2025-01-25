import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GptSearchBar = () => {
    //console.log('language',language)
    const langkey = useSelector(store=>store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
        console.log('searchText',searchText.current.value);
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
          });
          console.log('gptResults',gptResults.choices)
    }
    return (
        <div className='p-[10%] flex justify-center'>
            <form className= 'w-1/2 bg-black  grid grid-cols-12'onSubmit={(e)=>e.preventDefault()} >
                <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[langkey]?.gptSearchPlaceholder} ref = {searchText}/>
                <button type="submit"className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'
                onClick={handleGptSearchClick}
                >{lang[langkey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar