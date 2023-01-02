import React from "react";
import Bg from "./Bg";
import EventArea from "./EventArea";

const AllEvent = () => {
  return (
    <div className="w-screen relative">
      <Bg />
      <EventArea />
      <div className="relative xl:absolute mt-4 bottom-4 w-full flex flex-col xl:flex-row items-center justify-center text-xl xl:text-2xl 2xl:text-4xl">
        <div className="text-white">Developed By</div>
        <div className="text-[#ff0000] ml-4 font-medium">KoffeewithKoders</div>
      </div>
    </div>
  );
};

export default AllEvent;
