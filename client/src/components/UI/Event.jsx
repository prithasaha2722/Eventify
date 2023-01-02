import React, { useRef } from "react";
import test from "../../images/test.png";
import polygonlogo from "../../images/polygonlogo.png";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import Content from "./Content";
import { useState } from "react";
import { useEffect } from "react";

const Event = (props) => {
  const divRef = useRef();
  const [rect, setRect] = useState(null)
  

  return (
    
      <motion.div
        className="h-[500px] w-1/4 bg-white shadow-xl rounded-b-2xl mx-4 my-8" 
        ref={divRef} onMouseOver={()=>setRect( window.innerWidth - divRef.current.getBoundingClientRect().right < 510)}
      >
        <Tooltip content={<Content/>} direction={rect ? 'left' : 'right'}>
        <div className="h-[60%] flex items-center justify-center w-full relative">
          <img className="h-full w-full" src={test} alt={"test"} />
          <span className="bg-[#ffffff] opacity-80 absolute top-3 px-2 py-1 rounded-xl left-2 z-2 flex items-center justify-around">
            <span className="font-medium text-lg mr-2">FREE</span>
            <span className=" -rotate-6">
              <img className="h-full w-full" src={polygonlogo} alt="polygon" />
            </span>
          </span>
        </div>
        <div className="flex items-center h-[40%]">
          <div className="min-w-[150px] min-h-full flex flex-col items-center justify-center relative">
            <div className="flex flex-col h-fit w-fit rounded-t-xl rounded-b-lg overflow-hidden shadow-2xl relative">
              <span className="bg-[#1F61E4] text-[#ececec] px-4 py-3  text-2xl font-semibold">
                NOV
              </span>
              <span className="w-full p-2 text-center text-xl font-medium">
                20
              </span>
            </div>
            <div className="h-[70%] w-1 bg-[#00000040] rounded-xl absolute right-0"></div>
          </div>
          <div className="flex flex-col pl-10 items-start h-full mt-8">
            <span className="font-bold text-4xl">Event Name</span>
            <span className="text-2xl mt-2 font-extrabold text-[#1F61E4]">
              Venue
            </span>
            <span className="text-xl mt-2">Small Description</span>
          </div>
        </div>
        </Tooltip>
      </motion.div>
    
  );
};

export default Event;
