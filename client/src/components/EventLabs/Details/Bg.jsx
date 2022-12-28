import React from 'react'
import image from '../../../images/Details.png'
import Logo from '../../../images/Logo.png'

const Bg = () => {
  return (
    <div className='h-screen w-screen px-[100px] bg-black flex items-center justify-between m-auto relative'>
      <div className="absolute top-0 left-0 w-[350px]"><img className="h-full w-full" src={Logo} alt='Eventify'/></div>
        <span className='w-[51%] flex  flex-col justify-end'>
          <h2 className='font-bold text-white text-8xl'>What is event management software?</h2>
          <div className='text-white text-3xl mt-12'>Event management software (EMS) can be called an event organizer's personal assistant—something that helps you manage all aspects of your event, from start to finish. From building an event website, selling tickets to the event and promoting the event to managing sessions and following up with attendees, your event management platform is a one-stop-shop that allows you to do everything.</div>
          <button className='text-3xl mt-7 bg-red-600 w-fit p-4 rounded-md text-white font-medium'>Get Started</button>
        </span>
        <span className='w-[37%]'><img className='w-full h-full' src={image} alt='EventLabs'/></span>
    </div>
  )
}

export default Bg;