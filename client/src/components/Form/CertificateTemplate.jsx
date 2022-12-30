import React from "react";
import cert1 from "../../images/cert/cert1.png";
import cert2 from "../../images/cert/cert2.png";
import cert3 from "../../images/cert/cert3.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigate } from 'react-router-dom'

const Option = (props) => {
    const sendHandler = () => {
        console.log(props.selectedValue)
        props.select(props.id)
    }
    return (
        <motion.button
            onClick={sendHandler}
            whileHover={{
                transform: 'scale(1.05)'
            }}
            className={`w-1/4 border-8 rounded-xl scale-100 overflow-hidden ${ props.selectedValue === props.id ? 'border-[#2d822d]' : 'border-transparent' }`}
        >
            <img src={props.image} className="w-full h-full" alt={props.alt} />
        </motion.button>
    );
};

const Radio = () => {
    const [navigate, setNavigate] = useState(false)
    const [value, setValue] = useState(null)
    const confirmHandler = () =>{
        setNavigate(true)
    }
    if (navigate) {
        return <Navigate to='/details' />
    }
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl text-center my-16 absolute top-0 left-[50%] translate-x-[-50%]">
                Choose Certificate Template
            </h2>
            <div className="flex flex-wrap justify-around items-center w-screen mt-[17rem] h-auto p-12 ">
                <Option image={cert1} selectedValue={value} select={setValue} alt={'cert1'} id={1}/>
                <Option image={cert2} selectedValue={value} select={setValue} alt={'cert2'} id={2}/>
                <Option image={cert3} selectedValue={value} select={setValue} alt={'cert3'} id={3}/>
            </div>
            <button className="p-4 text-3xl text-white bg-[#08BD80]" onClick={confirmHandler}>Comfirm Template</button>
        </div>
    );
};

export default Radio;
