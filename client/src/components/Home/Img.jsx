import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Bg from "../../images/Bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Img = () => {
  const [eventLabs, setEventLabs] = useState(false);
  const [bannerify, setBannerify] = useState(false);
  const [scale, setScale] = useState(1.5)
  if (eventLabs) {
    return <Navigate to="/eventLabs" />;
  }
  if (bannerify) {
    return <Navigate to="/bannerify" />;
  }
  
  const scrollHandler = (e) => {
    console.log(e)
    if(e.deltaY > 0 && scale <= 3.49057){
      setScale( (prev) => prev + 0.16 )
    }
    else{
      setScale( (prev) =>{
        if(prev>=1){
          setScale( (prev) => prev - 0.16 )
        }else{
          setScale(1.5)
        }
      } )
    }
    console.log(scale)
  }
  return (
    <div
      className=" bg-black relative w-screen overflow-hidden flex items-center justify-center "
      id="Home"
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className="container h-screen"
        >
          <div
            className="flex items-center justify-center relative"
            onWheel={scrollHandler}
            style={{transform: `Scale(${scale})`}}
          >
            <img
              className="w-full h-screen "
              src={Bg}
              alt="background"
            />
            <div className="w-[300px] h-full flex justify-around items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              <motion.button
                onClick={() => setBannerify(true)}
                className="shadow-2xl h-[100px] w-[116px] rounded-md flex flex-col items-start justify-center text-xl font-medium p-2 bg-white"
                whileHover={{ top: "-50px" }}
              >
                <span className="text-[#000000] font-thin">For</span>
                <span className="w-full">Bannerify</span>
                <span className="text-[0.5rem] underline">
                  explore <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </motion.button>
              <motion.button
                onClick={() => setEventLabs(true)}
                className="shadow-2xl h-[100px] w-[116px] rounded-md flex flex-col items-start justify-center text-xl font-medium p-2 bg-white"
                whileHover={{ top: "49%" }}
              >
                <span className="text-[#000000] font-thin">For</span>
                <span className="w-full">EventLabs</span>
                <span className="text-[0.5rem] underline">
                  explore <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
        {/* <div className="h-screen w-screen"></div> */}
      </div>
    </div>
  );
};

export default Img;
