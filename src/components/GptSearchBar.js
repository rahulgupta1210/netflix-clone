import React from 'react'
import language from '../utils/languageConstant'

const GptSearchBar = () => {
    return (
        <div className='p-[10%] flex justify-center'>
            <form className= 'w-1/2 bg-black  grid grid-cols-12'>
                <input className='p-4 m-4 col-span-9 text-gray-500' type="text" placeholder={language.hindi.placeholder} />
                <button type="submit"className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{language.hindi.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar