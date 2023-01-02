import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Eventlabs/FormLogo.png";
import { useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ban1 from "../../images/ban/ban1.png";
import ban2 from "../../images/ban/ban2.png";
import ban3 from "../../images/ban/ban3.png";
import tic1 from "../../images/tckts/tic1.png";
import tic2 from "../../images/tckts/tic2.png";
import tic3 from "../../images/tckts/tic3.png";
import cert1 from "../../images/cert/cert1.png";
import cert2 from "../../images/cert/cert2.png";
import cert3 from "../../images/cert/cert3.png";

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col p-10 my-3 2xl:my-6 bg-transparent rounded-3xl">
      <label
        htmlFor={props.id}
        className="px-2 flex justify-between items-center mb-4"
      >
        <span className=" text-xl 2xl:text-4xl mr-3">{props.name}</span>
        <span className="text-lg 2xl:text-xl text-[#ff0000]">
          <FontAwesomeIcon icon={faAsterisk} />
        </span>
      </label>
      {props.type === "textArea" ? (
        <textarea
          className="border-[#000030] outline-none border-b text-xl 2xl:text-3xl p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          required
          placeholder={props.name}
          ref={ref}
        />
      ) : (
        <input
          type={props.type}
          className="border-[#000000] outline-none border-b text-xl 2xl:text-3xl text-black p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          name=""
          required
          placeholder={props.name}
          ref={ref}
        />
      )}
    </div>
  );
});

const Radio = (props) => {
  const sendHandler = () => {
    console.log(props.selectedValue);
    props.select(props.id);
  };
  return (
    <motion.button
      onClick={sendHandler}
      whileHover={{
        transform: "scale(1.05)",
      }}
      className={`w-3/6 my-6 border-8 rounded-xl scale-100 overflow-hidden ${
        props.selectedValue === props.id
          ? "border-[#2d822d]"
          : "border-transparent"
      }`}
    >
      <img src={props.image} className="w-full h-full" alt={props.alt} />
    </motion.button>
  );
};

const EventForm = () => {
  const [eventId, setEventId] = useState(null);
  const [navigate, setNavigate] = useState(false);
  const [send, setSend] = useState(false);
  const [banvalue, setBanValue] = useState(null);
  const [ticvalue, setTicValue] = useState(null);
  const [certvalue, setCertValue] = useState(null);

  const orgnameRef = useRef();
  const eventnameRef = useRef();
  const orgwebRef = useRef();
  const venueRef = useRef();
  const startdateRef = useRef();
  const starttimeRef = useRef();
  const enddateRef = useRef();
  const endtimeRef = useRef();
  const numberofattendeeRef = useRef();
  const logoRef = useRef();
  const signatureRef = useRef();

  const registerEvent = async () => {
    const Response = await fetch("/organizer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orgname: orgnameRef.current.value,
        eventname: eventnameRef.current.value,
        orgweb: orgwebRef.current.value,
        venue: venueRef.current.value,
        startdate: startdateRef.current.value,
        starttime: starttimeRef.current.value,
        enddate: enddateRef.current.value,
        endtime: endtimeRef.current.value,
        numberofattendee: numberofattendeeRef.current.value,
        logo: logoRef.current.value,
        signature: signatureRef.current.value,
        banner: banvalue,
        ticket: ticvalue,
        certificate: certvalue
      }),
    });

    const data = await Response.json();
    setEventId(data);
    setNavigate(true);
    setSend(true)
  };

  const registeHandler = () => {
    registerEvent();
  };

  if (navigate) {
    return <Navigate to={`/${eventId}/registrationForm`} />;
  }

  return (
    <Fragment>
      {!send ? (<div className="w-screen h-max 2xl:h-screen flex flex-col 2xl:flex-row flex-wrap items-center justify-around bg-[#000000] text-white xl:overflow-hidden scrollbar-none mb-5">
      <div className=" w-3/5 md:w-1/3 2xl:w-1/4">
        <img src={Logo} className="w-full h-full" alt="eventLabs" />
      </div>
      <div className="w-full lg:w-2/3 xl:w-3/5 2xl:w-1/2 h-screen flex flex-col 2xl:overflow-y-auto scrollbar-none">
        <Input
          id={"orgname"}
          name={`Organisation Name`}
          type={`text`}
          ref={orgnameRef}
        />
        <Input
          id={"eventname"}
          name={`Event Name`}
          type={`text`}
          ref={eventnameRef}
        />
        <Input
          id={"orgweb"}
          name={`Organisation website`}
          type={`text`}
          ref={orgwebRef}
        />
        <Input id={"venue"} name={`Venue`} type={`text`} ref={venueRef} />
        <div className="flex flex-col md:flex-row justify-around items-center">
          <Input
            id={"startdate"}
            name={`Start Date`}
            type={`date`}
            ref={startdateRef}
          />
          <Input
            id={"starttime"}
            name={`Start Time`}
            type={`time`}
            ref={starttimeRef}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <Input
            id={"enddate"}
            name={`End Date`}
            type={`date`}
            ref={enddateRef}
          />
          <Input
            id={"endtime"}
            name={`End Time`}
            type={`time`}
            ref={endtimeRef}
          />
        </div>
        <Input
          id={"numberofattendee"}
          name={`No. of Atttendee (expected)`}
          type={`text`}
          ref={numberofattendeeRef}
        />
        <Input
          id={"logo"}
          name={`Organisation Logo (link)`}
          type={`text`}
          ref={logoRef}
        />
        <Input
          id={"signature"}
          name={`Authorizer Signature (link)`}
          type={`text`}
          ref={signatureRef}
        />
        <div className="flex flex-col flex-wrap justify-center items-center ">
          <hr className="bg-white w-full mb-7" />
          <h2 className="text-4xl">Choose Banner Template</h2>
          <Radio
            image={ban1}
            selectedValue={banvalue}
            select={setBanValue}
            alt={"banner1"}
            id={1}
          />
          <Radio
            image={ban2}
            selectedValue={banvalue}
            select={setBanValue}
            alt={"banner2"}
            id={2}
          />
          <Radio
            image={ban3}
            selectedValue={banvalue}
            select={setBanValue}
            alt={"banner3"}
            id={3}
          />
        </div>
        <div className="flex flex-col items-center">
          <hr className="bg-white w-full mb-7" />
          <h2 className="text-4xl">Choose Ticket Template</h2>
          <div className="flex flex-col flex-wrap justify-around items-center w-screen mt-4 h-auto p-12 ">
            <Radio
              image={tic1}
              selectedValue={ticvalue}
              select={setTicValue}
              alt={"tic1"}
              id={1}
            />
            <Radio
              image={tic2}
              selectedValue={ticvalue}
              select={setTicValue}
              alt={"tic2"}
              id={2}
            />
            <Radio
              image={tic3}
              selectedValue={ticvalue}
              select={setTicValue}
              alt={"tic3"}
              id={3}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <hr className="bg-white w-full mb-7" />
          <h2 className="text-4xl">Choose Ticket Template</h2>
          <div className="flex flex-col flex-wrap justify-around items-center w-screen mt-4 h-auto p-12 ">
            <Radio
              image={cert1}
              selectedValue={certvalue}
              select={setCertValue}
              alt={"cert1"}
              id={1}
            />
            <Radio
              image={cert2}
              selectedValue={certvalue}
              select={setCertValue}
              alt={"cert2"}
              id={2}
            />
            <Radio
              image={cert3}
              selectedValue={certvalue}
              select={setCertValue}
              alt={"cert3"}
              id={3}
            />
          </div>
        </div>
        <button
          onClick={registeHandler}
          className="text-white rounded-xl bg-[#3361C2] my-7 p-2 2xl:p-5 text-lg 2xl:text-3xl font-medium m-auto"
        >
          Submit to Register Event
        </button>
      </div>
    </div>) : (
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl my-5 font-semibold">The Event is registered</div>
          <div className="text-4xl my-5 font-semibold">Thank you for choosing us</div>
        </div>
      )}
    </Fragment>
  );
};

export default EventForm;
