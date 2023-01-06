import React from "react";
import image from "../../../images/Eventlabs/Eventlabs.png";
import Logo from "../../../images/Eventlabs/Logo.png";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { motion } from 'framer-motion'

const Bg = () => {
  const [navigate, setNavigate] = useState(false);
  const navigateHandler = () => {
    setNavigate(true);
  };
  if (navigate) {
    return <Navigate to="/details" />;
  }
  return (
    <div className='min-h-screen w-screen px-[30px] xl:px-[100px] bg-black flex flex-col xl:flex-row items-center justify-between m-auto relative pb-4'>
      <div className="absolute top-0 left-0 w-[40%] sm:w-[200px] 2xl:w-[250px]"><img className="h-full w-full" src={Logo} alt='Eventify'/></div>
        <motion.span initial={{rotate:180, x:'-100%', opacity:0}} whileInView={{rotate: 0, x:0, opacity: 1}} transition={{duration: 0.5}} className=' xl:w-[51%] flex  flex-col justify-end mt-[5rem]'>
          <h2 className='font-bold w-full text-white text-4xl xl:text-6xl 2xl:text-8xl'>What is event management software?</h2>
          <div className='text-white text-md xl:text-2xl 2xl:text-3xl mt-12'>Event management software (EMS) can be called an event organizer's personal assistant—something that helps you manage all aspects of your event, from start to finish. From building an event website, selling tickets to the event and promoting the event to managing sessions and following up with attendees, your event management platform is a one-stop-shop that allows you to do everything.</div>
          <button onClick={navigateHandler} className='text-lg xl:text-2xl 2xl:text-3xl mt-7 bg-red-600 w-fit p-2 xl:p-4 rounded-md text-white font-medium'>Get Started</button>
        </motion.span>
        <motion.span className='w-full mb-5 md:w-2/3 xl:w-[37%]' initial={{scale: 0}} whileInView={{scale:1}} transition={{duration:0.4, type:'tween'}}><img className='w-full h-full' src={image} alt='EventLabs'/></motion.span>
    </div>
  );
};

export default Bg;
