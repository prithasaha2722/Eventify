import React from 'react'
import Bg from './Bg'
import Img from './Img'

const Home = () => {
  return (
    <div className='overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Bg/>
        <Img/>
    </div>
  )
}

export default Home