import React from "react";
import Event from "../../UI/Event";

const EventArea = () => {
  return (
    <div className="flex flex-row flex-wrap items-center 2xl:items-start mt-3 bg-white">
      <h2 className="text-3xl 2xl:text-7xl ml-7 font-bold">Featured Events</h2>
      <div className="w-screen h-auto p-10 flex flex-wrap justify-around items-center ">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};

export default EventArea;
