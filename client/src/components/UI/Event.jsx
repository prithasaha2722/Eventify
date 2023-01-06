import React, { useRef } from "react";
import test from "../../images/test.png";
import polygonlogo from "../../images/polygonlogo.png";
import { motion } from "framer-motion";
import Content from "./Content";
import BasicModal from "./Modal";

const Event = (props) => {

  return (
      <BasicModal Content={<Content />}>
      <motion.div
        className="2xl:w-[500px] lg:w-[300px] bg-white shadow-xl rounded-b-2xl mx-4 my-8"
        initial={{x:'-100%'}} whileInView={{x:0}} transition={{duration: 0.7, delay: 0.2}}
      >
        <div className="w-[95%] m-auto flex items-center justify-center 2xl:w-full relative">
          <img className="h-full w-full" src={test} alt={"test"} />
          <span className="bg-[#ffffff] opacity-80 absolute top-0 2xl:top-3 px-2 py-1 2xl:rounded-xl left-0 2xl:left-2 z-2 flex items-center justify-around">
            <span className="font-medium text-sm mr-2">FREE</span>
            <span className=" -rotate-6 w-5 2xl:w-10">
              <img className="h-full w-full" src={polygonlogo} alt="polygon" />
            </span>
          </span>
        </div>
        <div className="flex items-center h-[40%]">
          <div className="2xl:min-w-[150px] p-4 min-h-full flex flex-col items-center justify-center relative">
            <div className="flex flex-col h-fit w-fit rounded-t-xl rounded-b-lg overflow-hidden shadow-2xl relative">
              <span className="bg-[#1F61E4] text-[#ececec] px-4 py-3 text-lg 2xl:text-2xl font-semibold">
                NOV
              </span>
              <span className="w-full p-2 text-center text-md 2xl:text-xl font-medium">
                20
              </span>
            </div>
            <div className="h-[70%] w-1 bg-[#00000040] rounded-xl absolute right-0"></div>
          </div>
          <div className="flex flex-col p-4 2xl:pl-10 items-start h-full mt-8">
            <span className="font-bold text-xl 2xl:text-4xl">Event Name</span>
            <span className="text-lg 2xl:text-2xl mt-2 font-extrabold text-[#1F61E4]">
              Venue
            </span>
            <span className="hidden 2xl:inline-block text-xl mt-2">Small Description</span>
          </div>
        </div>
      </motion.div>
    </BasicModal>
  );
};

export default Event;
// onMouseOver={()=>setRect( window.innerWidth - divRef.current.getBoundingClientRect().right < 510)}


