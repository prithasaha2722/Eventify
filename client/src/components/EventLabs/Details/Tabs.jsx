import React, { useState } from "react";
import Registration from "../../../images/Eventlabs/Registration1.png";
import tickets from "../../../images/Eventlabs/tickets.png";
import checkIn from "../../../images/Eventlabs/checkIn.png";
import certificate from "../../../images/Eventlabs/certificate.png";
import { Navigate } from "react-router-dom";
const BoxWrapper = (props) => {
  return (
    <div
      className="w-screen h-screen flex items-center m-auto justify-center relative text-black"
      style={{
        flexDirection: props.direction,
        backgroundColor: props.bgcolor ? props.bgcolor : "white",
        height: props.height ? props.height : "auto",
        padding: props.height ? "auto" : "15vh 0px 15vh 0px",
      }}
    >
      {props.children}
    </div>
  );
};

const Tabs = () => {
  const [register, setRegister] = useState(false);
  const [tick, setTickets] = useState(false);
  const [checkin, setCheckIn] = useState(false);
  const [certi, setCerti] = useState(false);
  if (register) {
    return <Navigate to="/registerEvent" />;
  } else if (tick) {
    return <Navigate to="/ticketsTemplate" />;
  } else if (checkin) {
    return <Navigate to="/registerEvent" />;
  } else if (certi) {
    return <Navigate to="/certificateTemplate" />;
  } else {
    return (
      <div className="w-screen h-fit relative">
        <BoxWrapper direction="row">
          <div className="w-[51%] flex flex-col justify-end">
            <h2 className="font-bold text-7xl">
              Breaking down event management software into essentials
            </h2>
            <div className="text-3xl mt-10 w-3/4">
              Often, ticketing and registration software are mistaken for event
              management software. However, modern EMS tools are holistic
              solutions that can house them along with other event management
              necessities in a single console. They often include the following:
            </div>
            <button
              onClick={() => setRegister(true)}
              className="w-fit text-4xl mt-14 text-white p-4 rounded-md bg-[#00A8A8]"
            >
              Register Your Event
            </button>
          </div>
          <div className="w-[23%]">
            <img
              src={Registration}
              alt="Registration"
              className="w-full h-full"
            />
          </div>
        </BoxWrapper>
        <BoxWrapper direction="row-reverse">
          <div className="w-[51%] flex flex-col justify-end">
            <h2 className="font-bold text-7xl">
              Breaking down event management software into essentials
            </h2>
            <div className="text-3xl mt-10 w-3/4">
              Often, ticketing and registration software are mistaken for event
              management software. However, modern EMS tools are holistic
              solutions that can house them along with other event management
              necessities in a single console. They often include the following:
            </div>
            <button
              onClick={() => setTickets(true)}
              className="w-fit text-4xl mt-14 text-white p-4 rounded-md bg-[#ED5580]"
            >
              Send Tickets
            </button>
          </div>
          <div className="w-[14%] mr-[300px]">
            <img src={tickets} alt="tickets" className="w-full h-full" />
          </div>
        </BoxWrapper>
        <BoxWrapper direction="row">
          <div className="w-[51%] flex flex-col justify-end">
            <h2 className="font-bold text-7xl">
              Breaking down event management software into essentials
            </h2>
            <div className="text-3xl mt-10 w-3/4">
              Often, ticketing and registration software are mistaken for event
              management software. However, modern EMS tools are holistic
              solutions that can house them along with other event management
              necessities in a single console. They often include the following:
            </div>
            <button
              onClick={() => setCheckIn(true)}
              className="w-fit text-4xl mt-14 text-white p-4 rounded-md bg-[#79994C]"
            >
              Send Check In Mail
            </button>
          </div>
          <div className="w-[14%] mr-[100px]">
            <img src={checkIn} alt="checkIn" className="w-full h-full" />
          </div>
        </BoxWrapper>
        <BoxWrapper direction="row-reverse">
          <div className="w-[51%] flex flex-col justify-end">
            <h2 className="font-bold text-7xl">
              Breaking down event management software into essentials
            </h2>
            <div className="text-3xl mt-10 w-3/4">
              Often, ticketing and registration software are mistaken for event
              management software. However, modern EMS tools are holistic
              solutions that can house them along with other event management
              necessities in a single console. They often include the following:
            </div>
            <button
              onClick={() => setCerti(true)}
              className="w-fit text-4xl mt-14 text-white p-4 rounded-md bg-[#F36A8D]"
            >
              Send Certificates
            </button>
          </div>
          <div className="w-[14%] mr-[300px]">
            <img
              src={certificate}
              alt="certificate"
              className="w-full h-full"
            />
          </div>
        </BoxWrapper>
        {/* <BoxWrapper height='100vh' direction="row-reverse" bgcolor="black">
        <div className="flex flex-wrap justify-around w-[90%] text-right">
          <div className="w-1/5 relative p-5 backdrop-blur-md bg-[#3B3E44] rounded-xl">
            <img
              src={Kaustav}
              className="rounded-full border-black w-4/5 m-auto"
              alt="Kaustav"
            />
            <div className="text-3xl m-auto text-center my-5">Kaustav Giri</div>
            <div className="text-4xl m-auto my-4 text-center">
              Front End Developer
            </div>
            <div className="flex justify-between w-2/4 my-5 m-auto items-center">
              <span className="px-4 py-3 rounded-full bg-[#ffffff] flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-[#000000]"
                  icon={faLinkedinIn}
                />
              </span>
              <span className="px-3 py-3 rounded-full bg-[#ffffff] flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-[#000000]"
                  icon={faGithub}
                />
              </span>
            </div>
          </div>
          <div className="w-1/5 relative p-5 backdrop-blur-md bg-[#3B3E44] rounded-xl">
            <img
              src={Soham}
              className="rounded-full border-black w-4/5 m-auto"
              alt="Soham"
            />
            <div className="text-3xl m-auto text-center my-5">
              Soham Chakraborty
            </div>
            <div className="text-4xl m-auto my-4 text-center">
              Back End Developer
            </div>
            <div className="flex justify-between w-2/4 my-5 m-auto items-center">
              <span className="px-4 py-3 rounded-full bg-[#ffffff] flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-[#000000]"
                  icon={faLinkedinIn}
                />
              </span>
              <span className="px-3 py-3 rounded-full bg-[#ffffff] flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-[#000000]"
                  icon={faGithub}
                />
              </span>
            </div>
          </div>
          <div className="w-1/5 relative p-5 backdrop-blur-md bg-[#3B3E44] rounded-xl">
            <img
              src={Pritha}
              className="rounded-full border-black w-4/5 m-auto"
              alt="Pritha"
            />
            <div className="text-3xl m-auto text-center my-5">Pritha Saha</div>
            <div className="text-4xl m-auto my-4 text-center">
              Python Automation
            </div>
            <div className="flex justify-between w-2/4 my-5 m-auto items-center">
              <span className="px-4 py-3 rounded-full bg-[#ffffff] flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-[#000000]"
                  icon={faLinkedinIn}
                />
              </span>
              <span className="px-3 py-3 rounded-full bg-[#ffffff] flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-[#000000]"
                  icon={faGithub}
                />
              </span>
            </div>
          </div>
        </div>
      </BoxWrapper> */}
        <div className="absolute bottom-0 w-full flex items-center bg-black p-4 justify-center text-4xl">
          <div className="text-white text-4xl">Developed By</div>
          <div className="text-[#ff0000] ml-4 font-medium">
            KoffeewithKoders
          </div>
        </div>
      </div>
    );
  }
};

export default Tabs;
