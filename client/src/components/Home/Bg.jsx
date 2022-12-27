import React from "react";
import Logo from '../../images/Logo.png'

const Bg = () => {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <div className="absolute top-0 left-0 w-[350px]"><img className="h-full w-full" src={Logo} alt='Eventify'/></div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-8xl text-[#ffffffb4]">Features that'll help you</span>
        <span className="text-8xl text-[#ffffffef] font-bold">Deliver a great event experience</span>
      </div>
    </div>
  );
};

export default Bg;
