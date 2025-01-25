import React from 'react'
import language from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const languagekey = useSelector(store=>store.config.language)
    return (
        <div className='p-[10%] flex justify-center'>
            <form className= 'w-1/2 bg-black  grid grid-cols-12'>
                <input className='p-4 m-4 col-span-9 bg-black text-white' type="text" placeholder={language[languagekey]?.gptSearchPlaceholder} />
                <button type="submit"className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{language[languagekey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar