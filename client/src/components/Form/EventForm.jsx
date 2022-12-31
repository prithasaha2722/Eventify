import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Eventlabs/FormLogo.png";
import { useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col p-10 my-6 bg-transparent rounded-3xl">
      <label
        htmlFor={props.id}
        className="px-2 flex justify-between items-center mb-4"
      >
        <span className="text-4xl mr-3">{props.name}</span>
        <span className="text-xl text-[#ff0000]">
          <FontAwesomeIcon icon={faAsterisk} />
        </span>
      </label>
      {props.type === "textArea" ? (
        <textarea
          className="border-[#000030] outline-none border-b text-3xl p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          required
          placeholder={props.name}
          ref={ref}
        />
      ) : (
        <input
          type={props.type}
          className="border-[#000000] outline-none border-b text-3xl text-black p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          name=""
          required
          placeholder={props.name}
          ref={ref}
        />
      )}
    </div>
  );
});

const EventForm = () => {
  const [eventId, setEventId] = useState(null);
  const [navigate, setNavigate] = useState(false);

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
      }),
    });

    const data = await Response.json();
    setEventId(data);
    setNavigate(true);
  };

  const registeHandler = () => {
    registerEvent();
  };

  if (navigate) {
    return <Navigate to={`/${eventId}/registrationForm`} />;
  }

  return (
    <div className="w-screen h-screen flex flex-wrap items-center justify-around bg-[#000000] text-white overflow-hidden">
      <div className="w-1/4">
        <img src={Logo} className="w-full h-full" alt="eventLabs" />
      </div>
      <div className="w-1/2 h-screen flex flex-col overflow-y-auto scrollbar-none">
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
        <div className="flex justify-around items-center">
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
        <div className="flex justify-around items-center">
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
        <button
          onClick={registeHandler}
          className="text-white rounded-xl bg-[#3361C2] my-7 p-5 text-3xl font-medium m-auto"
        >
          Submit to Register Event
        </button>
      </div>
    </div>
  );
};

export default EventForm;
