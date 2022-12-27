import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Bg from "../../images/Bg.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Img = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 4]);
  return (
    <div
      className=" bg-black relative w-screen overflow-hidden flex items-center justify-center "
      id="Home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="container"
          style={{
            scale,
          }}
        >
          <motion.div
            className="flex items-center justify-center relative"
            style={{
              scaleY: scrollYProgress,
            }}
          >
            <img
              className="w-full h-full "
              src={Bg}
              alt="background"
              draggable={false}
            />
            <div className="w-[300px] h-full flex justify-around items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              <motion.button className="shadow-2xl h-[100px] w-[116px] rounded-md flex flex-col items-start justify-center text-xl font-medium p-2 bg-white" whileHover={{top:'-50px'}}>
                <span className="text-[#000000] font-thin">For</span><span className="w-full">Organiser</span><span className="text-[0.5rem] underline">explore <FontAwesomeIcon icon={faArrowRight}/></span>
              </motion.button>
              <motion.button className="shadow-2xl h-[100px] w-[116px] rounded-md flex flex-col items-start justify-center text-xl font-medium p-2 bg-white" whileHover={{top: '49%'}}>
                <span className="text-[#000000] font-thin">For</span><span className="w-full">Participant</span><span className="text-[0.5rem] underline">explore <FontAwesomeIcon icon={faArrowRight}/></span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Img;
