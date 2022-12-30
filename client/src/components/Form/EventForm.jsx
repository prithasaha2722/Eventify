import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Eventlabs/FormLogo.png";

const Input = (props) => {
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
          className="border-[#000030] border-b text-3xl p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          required
          placeholder={props.name}
        />
      ) : (
        <input
          type={props.type}
          className="border-[#000000] border-b text-3xl text-black p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          name=""
          required
          placeholder={props.name}
        />
      )}
    </div>
  );
};

const EventForm = () => {
  return (
    <div className="w-screen h-screen flex flex-wrap items-center justify-around bg-[#000000] text-white overflow-hidden">
      <div className="w-1/3">
        <img src={Logo} className="w-full h-full" alt="eventLabs" />
      </div>
      <div className="w-1/2 h-screen flex flex-col overflow-y-auto scrollbar-none">
        <Input id={"orgname"} name={`Organisation Name`} type={`text`} />
        <Input id={"eventname"} name={`Event Name`} type={`text`} />
        <Input id={"orgweb"} name={`Organisation website`} type={`text`} />
        <Input id={"venue"} name={`Venue`} type={`text`} />
        <div className="flex justify-around items-center">
          <Input id={"startdate"} name={`Start Date`} type={`date`} />
          <Input id={"starttime"} name={`Start Time`} type={`time`} />
        </div>
        <div className="flex justify-around items-center">
          <Input id={"enddate"} name={`End Date`} type={`date`} />
          <Input id={"endtime"} name={`End Time`} type={`time`} />
        </div>
        <Input
          id={"numberofattendee"}
          name={`No. of Atttendee (expected)`}
          type={`text`}
        />
        <Input id={"logo"} name={`Organisation Logo (link)`} type={`text`} />
        <Input
          id={"signature"}
          name={`Authorizer Signature (link)`}
          type={`text`}
        />
        <button className="text-white rounded-xl bg-[#3361C2] my-7 p-5 text-3xl font-medium m-auto">
          Submit to Register Event
        </button>
      </div>
    </div>
  );
};

export default EventForm;
