import React, { forwardRef, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Eventlabs/FormLogo.png";

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
          className="border-[#000030] border-b text-3xl text-black focus:border-none focus:outline-none p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          required
          placeholder={props.name}
          ref={ref}
        />
      ) : (
        <input
          type={props.type}
          className="border-[#000000] border-b text-3xl text-black p-4 h-fit rounded-xl focus:border-[#00000030] focus:border-b"
          name=""
          required
          placeholder={props.name}
          ref={ref}
        />
      )}
    </div>
  );
});

const CheckInForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const walletaddressRef = useRef();
  const addressRef = useRef();

  const checkin = () => {
    sendData();
  };

  const sendData = async () => {
    const Response = await fetch("checkin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        walletaddress: walletaddressRef.current.value,
        address: addressRef.current.value
      })
    });
  };
  return (
    <div className="w-screen h-screen flex flex-wrap items-center justify-around bg-[#000000] text-white overflow-hidden">
      <div className="w-1/4">
        <img src={Logo} className="w-full h-full" alt="eventLabs" />
      </div>
      <div className="w-1/2 h-screen flex flex-col overflow-y-auto scrollbar-none">
        <h2 className="text-5xl mt-5 text-center w-full">Check In Form</h2>
        <Input id={"name"} name={`Name`} type={`text`} ref={nameRef} />
        <Input id={"email"} name={`Email`} type={`email`} ref={emailRef} />
        <Input
          id={"phone"}
          name={`Phone Number`}
          type={`text`}
          ref={phoneRef}
        />
        <Input
          id={"walletaddress"}
          name={`Wallet Address`}
          type={`text`}
          ref={walletaddressRef}
        />
        <Input
          id={"address"}
          name={`Address`}
          type={`textArea`}
          ref={addressRef}
        />
        <button
          onClick={checkin}
          className="text-white rounded-xl bg-[#3361C2] my-7 p-5 text-3xl font-medium m-auto"
        >
          Check In
        </button>
      </div>
    </div>
  );
};

export default CheckInForm;
