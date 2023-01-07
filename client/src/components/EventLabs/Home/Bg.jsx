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
    return <Navigate to="/new-Event/details" />;
  }
  return (
    <div className="min-h-screen w-screen px-[30px] xl:px-[100px] bg-black flex flex-col xl:flex-row items-center justify-between m-auto relative pb-4">
      <div className="absolute top-0 left-0 w-[40%] sm:w-[200px] 2xl:w-[250px]">
        <img className="h-full w-full" src={Logo} alt="Eventify" />
      </div>
      <span className=" xl:w-[51%] flex  flex-col justify-end mt-[5rem]">
        <h2 className="font-bold w-full text-white text-4xl xl:text-6xl 2xl:text-8xl">
          Why Eventify?
        </h2>
        <div className="text-white text-md xl:text-2xl 2xl:text-3xl mt-12">
          A decentralised event management system specifically designed to
          prevent unauthorised copying of tickets and certificates. By
          digitising the certificate and tickets and turning them into
          Non-Fungible Tokens using Smart Contracts, we streamline the security
          of an event. By reducing the quantity of faked tickets and
          certificates, we want to significantly increase the number of
          interested parties at events.
        </div>
        <button
          onClick={navigateHandler}
          className="text-lg xl:text-2xl 2xl:text-3xl mt-7 bg-red-600 w-fit p-2 xl:p-4 rounded-md text-white font-medium"
        >
          Get Started
        </button>
      </span>
      <span className="w-full mb-5 md:w-2/3 xl:w-[37%]">
        <img className="w-full h-full" src={image} alt="EventLabs" />
      </span>
    </div>
  );
};

export default Bg;
