import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
      <div className='w-full absolute -z-10'>
        <img src={BG_URL} className='h-screen object-cover'
          alt='logo' />
      </div>
      <div className='pt-[30%] md:p-0'>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GptSearch