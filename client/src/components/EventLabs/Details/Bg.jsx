import React from 'react'
import image from '../../../images/Eventlabs/Details.png'
import Logo from '../../../images/Eventlabs/eventLabsLogo.png'

const Bg = () => {
  return (
    <div className='min-h-screen w-screen px-[30px] xl:px-[100px] bg-black flex flex-col xl:flex-row items-center justify-between m-auto relative pb-4'>
      <div className="absolute top-0 left-0 w-[50%] sm:w-[200px] 2xl:w-[250px]"><img className="h-full w-full" src={Logo} alt='Eventify'/></div>
        <span className='xl:w-[51%] flex  flex-col justify-end mt-[5rem]'>
          <h2 className='font-bold w-full text-white text-4xl xl:text-6xl 2xl:text-8xl'>What is event management software?</h2>
          <div className='text-white text-md xl:text-2xl 2xl:text-3xl mt-12'>Event management software (EMS) can be called an event organizer's personal assistant—something that helps you manage all aspects of your event, from start to finish. From building an event website, selling tickets to the event and promoting the event to managing sessions and following up with attendees, your event management platform is a one-stop-shop that allows you to do everything.</div>
        </span>
        <span className='w-full mb-5 md:w-2/3 lg:w-1/3 xl:w-[37%]'><img className='w-full h-full' src={image} alt='EventLabs'/></span>
    </div>
  )
}

export default Bg;
