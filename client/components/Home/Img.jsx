import React from 'react'
import Bg from '../../images/Bg.jpg'

const Img = () => {
  return (
    <div className='w-screen relative'>
        <img className='w-full h-full' src={Bg} alt='background'/>
    </div>
  )
}

export default Img