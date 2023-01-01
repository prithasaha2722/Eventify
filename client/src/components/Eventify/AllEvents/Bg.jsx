import React from "react";
import image from "../../../images/Eventlabs/Eventlabs.png";
import Logo from "../../../images/Eventlabs/Logo.png";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Bg = () => {
  const [navigate, setNavigate] = useState(false);
  const navigateHandler = () => {
    setNavigate(true);
  };
  if (navigate) {
    return <Navigate to="/details" />;
  }
  return (
    <div className="min-h-screen w-screen px-[30px] xl:px-[100px] bg-black flex flex-col xl:flex-row items-center justify-between m-auto relative">
      <div className="absolute top-0 left-0 w-[60%] sm:w-[200px] xl:w-[350px]">
        <img className="h-full w-full" src={Logo} alt="Eventify" />
      </div>
      <button
        onClick={navigateHandler}
        className="absolute right-6 top-3 text-lg xl:text-3xl mt-7 bg-red-600 w-fit p-2 xl:p-4 rounded-md text-white font-medium"
      >
        Create Your Event
      </button>
      <span className=" xl:w-[51%] flex  flex-col justify-end mt-[5rem]">
        <h2 className="font-bold w-full text-white text-3xl xl:text-8xl">
          What is event management software?
        </h2>
        <div className="text-white text-md xl:text-3xl mt-12">
          Event management software (EMS) can be called an event organizer's
          personal assistant—something that helps you manage all aspects of your
          event, from start to finish. From building an event website, selling
          tickets to the event and promoting the event to managing sessions and
          following up with attendees, your event management platform is a
          one-stop-shop that allows you to do everything.
        </div>
        {/* <button
          onClick={navigateHandler}
          className="text-lg xl:text-3xl mt-7 bg-red-600 w-fit p-2 xl:p-4 rounded-md text-white font-medium"
        >
          Get Started
        </button> */}
      </span>
      <span className="w-full mb-5 xl:w-[37%]">
        <img className="w-full h-full" src={image} alt="EventLabs" />
      </span>
    </div>
  );
};

export default Bg;
