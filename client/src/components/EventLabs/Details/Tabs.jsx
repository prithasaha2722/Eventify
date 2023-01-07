import React, { useState } from "react";
import Registration from "../../../images/Eventlabs/Registration1.png";
import tickets from "../../../images/Eventlabs/tickets.png";
import checkIn from "../../../images/Eventlabs/checkIn.png";
import certificate from "../../../images/Eventlabs/certificate.png";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
const BoxWrapper = (props) => {
  return (
    <motion.div
      initial={{
        x: props.direction === "row" ? "100vh" : "-100vh",
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-screen h-screen flex flex-col md:flex-row items-center m-auto justify-center relative text-black"
      style={{
        flexDirection: props.direction,
        backgroundColor: props.bgcolor ? props.bgcolor : "white",
        height: props.height ? props.height : "auto",
        padding: props.height ? "auto" : "15vh 0px 15vh 0px",
      }}
    >
      {props.children}
    </motion.div>
  );
};

const Tabs = () => {
  const [register, setRegister] = useState(false);
  const [tick, setTickets] = useState(false);
  const [checkin, setCheckIn] = useState(false);
  const [certi, setCerti] = useState(false);
  if (register) {
    return <Navigate to="/new-Event/registerEvent" />;
  } else if (checkin) {
    return <Navigate to="/participants/:eventId/checkOut" />;
  } else {
    return (
      <div className="w-screen h-fit relative">
        <BoxWrapper direction={window.innerWidth < 700 ? "col" : "row"}>
          <div className=" w-full md:w-[51%] px-3 flex flex-col justify-center items-center md:items-start md:justify-end">
            <h2 className="font-bold text-3xl  2xl:text-7xl">
              Organizer Event Registration
            </h2>
            {window.innerWidth < 700 && (
              <div className="w-[60%] flex items-center text-center mt-5">
                <img
                  src={Registration}
                  alt="Registration"
                  className="w-full h-full"
                />
              </div>
            )}
            <div className=" w-full text-lg 2xl:text-3xl mt-10 2xl:w-3/4">
              Provide us with all your event details. Choose the templates for
              Banners, Tickets and Certificates. Now, let us make your event
              happening.
            </div>
            <button
              onClick={() => setRegister(true)}
              className="w-fit text-xl 2xl:text-4xl mt-14 text-white p-4 rounded-md bg-[#00A8A8]"
            >
              Register Your Event
            </button>
          </div>
          {window.innerWidth >= 700 && (
            <div className="w-[23%]">
              <img
                src={Registration}
                alt="Registration"
                className="w-full h-full"
              />
            </div>
          )}
        </BoxWrapper>
        <BoxWrapper direction={window.innerWidth < 700 ? "col" : "row-reverse"}>
          <div className=" w-full md:w-[51%] px-3 flex flex-col justify-center items-center md:items-start md:justify-end">
            <h2 className="font-bold text-3xl 2xl:text-7xl">
              Attendance Gateway
            </h2>
            {window.innerWidth < 700 && (
              <div className="w-[60%] flex items-center text-center mt-5">
                <img src={checkIn} alt="checkIn" className="w-full h-full" />
              </div>
            )}
            <div className="w-full text-lg 2xl:text-3xl mt-10 2xl:w-3/4">
              This marks the completion of the event and that the attendee was
              present throughout. Failing to fill up the check out mail
              attendees won't be mailed their NFT Certificates.
            </div>
            <button
              onClick={() => setCheckIn(true)}
              className="w-fit text-xl 2xl:text-4xl mt-14 text-white p-4 rounded-md bg-[#79994C]"
            >
              Send Check Out Mail
            </button>
          </div>
          {window.innerWidth >= 700 && (
            <div className="w-[14%] mr-[100px]">
              <img src={checkIn} alt="checkIn" className="w-full h-full" />
            </div>
          )}
        </BoxWrapper>
        <div className="relative xl:absolute mt-4 bottom-0 py-3 w-full flex flex-col xl:flex-row items-center justify-center text-xl xl:text-2xl 2xl:text-4xl bg-black">
          <div className="text-white">Developed By</div>
          <div className="text-[#ff0000] ml-4 font-medium">
            KoffeewithKoders
          </div>
        </div>
      </div>
    );
  }
};

export default Tabs;
