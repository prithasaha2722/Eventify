import React from "react";
import Features from "../../../images/Eventlabs/Features.png";
import Kaustav from "../../../images/Eventlabs/Kaustav.png";
import Soham from "../../../images/Eventlabs/Soham.png";
import Pritha from "../../../images/Eventlabs/Pritha.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const BoxWrapper = (props) => {
  return (
    <div
      className="w-screen h-screen flex items-center m-auto justify-center"
      style={{
        backgroundColor: props.bgcolor,
        flexDirection: props.direction,
        color: props.textColor,
      }}
    >
      {props.children}
    </div>
  );
};

const Tabs = () => {
  return (
    <div className="w-screen h-auto relative">
      <BoxWrapper bgcolor="white" direction="row">
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
        </div>
        <div className="w-[37%]">
          <img src={Features} alt="Features" className="w-full h-full" />
        </div>
      </BoxWrapper>
      <BoxWrapper bgcolor="Black" direction="row-reverse" textColor="White">
        <div className="flex flex-wrap justify-around w-[90%]">
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
      </BoxWrapper>
      <div className="absolute bottom-4 w-full flex items-center justify-center text-4xl">
        <div className="text-white text-4xl">Developed By</div>
        <div className="text-[#ff0000] ml-4 font-medium">KoffeewithKoders</div>
      </div>
    </div>
  );
};

export default Tabs;
