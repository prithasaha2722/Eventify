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
          className="border-[#000030] border-b text-3xl text-black focus:border-none focus:outline-none p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
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

const CheckInForm = () => {
  return (
    <div className="w-screen h-screen flex flex-wrap items-center justify-around bg-[#000000] text-white overflow-hidden">
      <div className="w-1/4">
        <img src={Logo} className="w-full h-full" alt="eventLabs" />
      </div>
      <div className="w-1/2 h-screen flex flex-col overflow-y-auto scrollbar-none">
        <h2 className="text-5xl mt-5 text-center w-full">Check In Form</h2>
        <Input id={"name"} name={`Name`} type={`text`} />
        <Input id={"email"} name={`Email`} type={`email`} />
        <Input id={"phone"} name={`Phone Number`} type={`text`} />
        <Input id={"walletaddress"} name={`Wallet Address`} type={`text`} />
        <Input id={"Address"} name={`Address`} type={`textArea`} />
        <button className="text-white rounded-xl bg-[#3361C2] my-7 p-5 text-3xl font-medium m-auto">
          Check In
        </button>
      </div>
    </div>
  );
};

export default CheckInForm;
