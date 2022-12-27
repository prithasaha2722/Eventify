import React from 'react'
import image from '../../../images/Eventlabs.png'

const Bg = () => {
  return (
    <div className='h-screen w-screen bg-black flex items-center'>
        <span className='w-1/2'></span>
        <span className='w-1/2'><img className='w-full h-full' src={image} alt='EventLabs'/></span>
    </div>
  )
}

export default Bg