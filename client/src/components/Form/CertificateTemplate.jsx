import React from "react";
import cert1 from "../../images/cert/cert1.png";
import cert2 from "../../images/cert/cert2.png";
import cert3 from "../../images/cert/cert3.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigate } from 'react-router-dom'

const Option = (props) => {
    const sendHandler = () => {
        console.log(props.id)
        props.navigateFunc(true)
    }
    return (
        <motion.button
            onClick={sendHandler}
            whileHover={{
                border: "green solid 10px",
                borderRadius: "10px",
                scale: 1.1,
            }}
            className="w-1/4"
        >
            <img src={props.image} className="w-full h-full" alt={props.alt} />
        </motion.button>
    );
};

const Radio = () => {
    const [navigate, setNavigate] = useState(false)
    if (navigate) {
        return <Navigate to='/eventLabs/details' />
    }
    return (
        <div className="">
            <h2 className="font-bold text-5xl text-center my-16 absolute top-0 left-[50%] translate-x-[-50%]">
                Choose Certificate Template
            </h2>
            <div className="flex flex-wrap justify-around items-center w-screen mt-[17rem] h-auto p-12 ">
                <Option image={cert1} alt={'cert1'} id={1} navigateFunc={setNavigate} />
                <Option image={cert2} alt={'cert2'} id={2} navigateFunc={setNavigate} />
                <Option image={cert3} alt={'cert3'} id={3} navigateFunc={setNavigate} />
            </div>
        </div>
    );
};

export default Radio;
