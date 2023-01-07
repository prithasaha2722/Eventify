import React from "react";
import Event from "../../UI/Event";
import { useSelector } from "react-redux";

const EventArea = (props) => {
  const data = useSelector((state) => state.event.allEventData);
  console.log(data);
  return (
    <div className="flex flex-row w-full flex-wrap 2xl:items-start mt-3 bg-white">
      <h2 className="text-3xl mt-4 2xl:text-6xl ml-7 font-bold">
        Featured Events
      </h2>
      <div className="w-screen h-auto p-10 flex flex-row flex-wrap ">
        {data.map((i) => (
          <Event
            key={i.event}
            eventName={i.eventname}
            date={i.date}
            venue={i.venue}
            cost={i.cost}
            url={i.bannerurl}
          />
        ))}
      </div>
    </div>
  );
};

export default EventArea;
