import React from "react";
import { motion, useScroll , useTransform } from "framer-motion";
import Bg from "../../images/Bg.jpg";



const Img = () => {
    const {scaleYProgress} = useScroll();
  return (
    <div
      className=" bg-black relative w-screen overflow-hidden "
      
    >
      <motion.div style={{}} whileInView={{scaleX: [0,2.7], scaleY: [0,2.8]}} transition={{duration:0.2}} >
      <img
        className="w-full h-full"
        src={Bg}
        alt="background"
      />
      </motion.div>
    </div>
  );
};

export default Img;
