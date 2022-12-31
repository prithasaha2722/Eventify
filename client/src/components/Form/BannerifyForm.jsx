import React, { forwardRef, Fragment, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Eventlabs/FormLogo.png";
import { motion } from "framer-motion";
import ban1 from "../../images/ban/ban1.png";
import ban2 from "../../images/ban/ban2.png";
import ban3 from "../../images/ban/ban3.png";

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
      className={`w-2/3 my-6 border-8 rounded-xl scale-100 overflow-hidden ${
        props.selectedValue === props.id
          ? "border-[#2d822d]"
          : "border-transparent"
      }`}
    >
      <img src={props.image} className="w-full h-full" alt={props.alt} />
    </motion.button>
  );
};

const BanerifyForm = () => {
  const orgnameRef = useRef();
  const eventnameRef = useRef();
  const orgmailRef = useRef();
  const venueRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  const [send, setSend] = useState(false);
  const [value, setValue] = useState(null);

  const createBanner = () => {
    sendData(value);
  };

  const sendData = async (data) => {
    const Response = await fetch("/bannerify", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        organization_name: orgnameRef.current.value,
        event_name: eventnameRef.current.value,
        organization_email: orgmailRef.current.value,
        venue: venueRef.current.value,
        date: dateRef.current.value,
        time: timeRef.current.value,
        selected: data,
      }),
    });
    setSend(true);
  };
  return (
    <div className="w-screen h-screen flex flex-wrap items-center justify-around bg-[#000000] text-white overflow-hidden">
      {!send ? (<Fragment>
      <div className="w-1/4">
        <img src={Logo} className="w-full h-full" alt="eventLabs" />
      </div>
      <div className="w-1/2 h-screen flex flex-col overflow-hidden overflow-y-auto scrollbar-none">
        <h2 className="text-5xl mt-5 text-center w-full">Check In Form</h2>
        <Input
          id={"orgname"}
          name={`Organisation Name`}
          type={`text`}
          ref={orgnameRef}
        />
        <Input
          id={"email"}
          name={`Organisation Email`}
          type={`email`}
          ref={orgmailRef}
        />
        <Input
          id={"enentname"}
          name={`Event Name`}
          type={`text`}
          ref={eventnameRef}
        />
        <Input id={"venue"} name={`Venue`} type={`text`} ref={venueRef} />
        <div className="flex items-center justify-center">
          <Input id={""} name={`Date`} type={`date`} ref={dateRef} />
          <Input id={"Time"} name={`Time`} type={"time"} ref={timeRef} />
        </div>
        <div className="flex flex-wrap justify-center items-center ">
          <h2 className="text-4xl">Choose Banner Template</h2>
          <Radio
            image={ban1}
            selectedValue={value}
            select={setValue}
            alt={"banner1"}
            id={1}
          />
          <Radio
            image={ban2}
            selectedValue={value}
            select={setValue}
            alt={"banner2"}
            id={2}
          />
          <Radio
            image={ban3}
            selectedValue={value}
            select={setValue}
            alt={"banner3"}
            id={3}
          />
        </div>
        <button
          onClick={createBanner}
          className="text-white rounded-xl bg-[#3361C2] my-7 p-5 text-3xl font-medium m-auto"
        >
          Create Banner
        </button>
      </div>
      </Fragment>) : (
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl my-5 font-semibold">The Banner is send to Your Mail</div>
          <div className="text-4xl my-5 font-semibold">Check Your Mail</div>
        </div>
      )}
    </div>
  );
};

export default BanerifyForm;
