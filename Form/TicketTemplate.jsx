import React from "react";
import cert1 from "../../images/tckts/tic1.png";
import cert2 from "../../images/tckts/tic2.png";
import cert3 from "../../images/tckts/tic3.png";
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

const TicketTemplate = () => {
    const [navigate, setNavigate] = useState(false)
    const [value, setValue] = useState(null)
    const [confirmed, setConfirmed] = useState(null)
    const confirmHandler = () =>{
        setConfirmed(value)
        sendTemplate(value)
    }
    const mailHandler = () =>{
        sendMail();
    }
    const sendTemplate = async (data) =>{
        const Response = await fetch('/tickets',{
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({'selected': data})
        })
    }
    const sendMail = async () => {
        const Response = await fetch('/ticketmail',{
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify('Mail send')
        })
        setNavigate(true)
    }
    if (navigate) {
        return <Navigate to='/details' />
    }
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl text-center my-16 absolute top-0 left-[50%] translate-x-[-50%]">
                Choose Ticket Template
            </h2>
            <div className="flex flex-wrap justify-around items-center w-screen mt-[17rem] h-auto p-12 ">
                <Option image={cert1} selectedValue={value} select={setValue} alt={'cert1'} id={1}/>
                <Option image={cert2} selectedValue={value} select={setValue} alt={'cert2'} id={2}/>
                <Option image={cert3} selectedValue={value} select={setValue} alt={'cert3'} id={3}/>
            </div>
            <button className="p-4 text-3xl rounded-xl text-white bg-[#08BD80]" onClick={confirmHandler}>Comfirm Template</button>
            <button className="p-4 text-3xl my-5 rounded-xl text-white bg-[#1F61E4] disabled:bg-[#00000050]" disabled={confirmed ==  null} onClick={mailHandler}>Send Mail</button>
        </div>
    );
};

export default TicketTemplate;
