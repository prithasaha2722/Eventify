import React from "react";
import Bg from "./Bg";
import EventArea from "./EventArea";

const AllEvent = () => {
  return (
    <div className="w-screen relative">
      <Bg />
      <EventArea />
      <div className="relative bottom-0 w-full flex items-center bg-black p-4 justify-center text-4xl">
        <div className="text-white text-4xl">Developed By</div>
        <div className="text-[#ff0000] ml-4 font-medium">KoffeewithKoders</div>
      </div>
    </div>
  );
};

export default AllEvent;
