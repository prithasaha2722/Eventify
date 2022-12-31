import React from "react";
import Features from "../../../images/Eventlabs/Features.png";
import Kaustav from "../../../images/Eventlabs/Kaustav.png";
import Soham from "../../../images/Eventlabs/Soham.png";
import Pritha from "../../../images/Eventlabs/Pritha.png";
import FAttendee from "../../../images/Eventlabs/FAttendee.png";
import FBanner from "../../../images/Eventlabs/FBanner.png";
import FCertificate from "../../../images/Eventlabs/FCertificate.png";
import FManagement from "../../../images/Eventlabs/FManagement.png";
import FRegistration from "../../../images/Eventlabs/FRegistration.png";
import FTickets from "../../../images/Eventlabs/FTickets.png";
import Banner from "../../../images/Bannerify/BannerMainSide.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const BoxWrapper = (props) => {
  return (
    <div
      className="w-screen  min-h-screen relative flex items-center m-auto justify-center"
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
  const [banner, setBanner] = useState(false)
  if(banner){
    return <Navigate to='/bannerForm'/>
  }
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
        <div className="w-1/2 p-9">
          <h2 className="font-bold text-7xl">
            Breaking down event management software into essentials
          </h2>
          <div className="text-3xl mt-10 w-3/4">
            Often, ticketing and registration software are mistaken for event
            management software. However, modern EMS tools are holistic
            solutions that can house them along with other event management
            necessities in a single console. They often include the following:
          </div>
          <button onClick={() => setBanner(true)} className='text-3xl mt-7 bg-red-600 w-fit p-4 rounded-md text-white font-medium'>Create Banner</button>
        </div>
        <div className="w-1/2 p-9">
          <img src={Banner} alt="Bannerify" className="w-full h-full" />
        </div>
      </BoxWrapper>
      <BoxWrapper bgcolor="white" direction="row">
        <h2 className="absolute top-10 text-7xl font-bold ">Features</h2>
        <div className="w-full flex flex-row flex-wrap justify-between ">
        <div className="my-6 w-[49%] px-6 justify-center items-center mt-4 flex flex-wrap flex-row-reverse ">
          <span className="text-2xl w-[70%] font-medium mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque obcaecati fugiat provident. Sed excepturi facilis itaque ipsa voluptatem similique aliquam neque esse! Obcaecati molestiae accusantium ipsam. Beatae, maxime enim.</span>
          <span className="h-[200px]"><img src={FBanner} alt='' className="h-full w-full"/></span>
        </div>
        <div className="my-6 w-[49%] px-6 justify-center items-center mt-4 flex flex-wrap flex-row-reverse">
          <span className="text-2xl w-[70%] font-medium mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque obcaecati fugiat provident. Sed excepturi facilis itaque ipsa voluptatem similique aliquam neque esse! Obcaecati molestiae accusantium ipsam. Beatae, maxime enim.</span>
          <span className="h-[200px]"><img src={FRegistration} alt='' className="h-full w-full"/></span>
        </div>
        <div className="my-6 w-[49%] px-6 justify-center items-center mt-4 flex flex-wrap flex-row-reverse">
          <span className="text-2xl w-[70%] font-medium mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque obcaecati fugiat provident. Sed excepturi facilis itaque ipsa voluptatem similique aliquam neque esse! Obcaecati molestiae accusantium ipsam. Beatae, maxime enim.</span>
          <span className="h-[200px]"><img src={FManagement} alt='' className="h-full w-full"/></span>
        </div>
        <div className="my-6 w-[49%] px-6 justify-center items-center mt-4 flex flex-wrap flex-row-reverse">
          <span className="text-2xl w-[70%] font-medium mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque obcaecati fugiat provident. Sed excepturi facilis itaque ipsa voluptatem similique aliquam neque esse! Obcaecati molestiae accusantium ipsam. Beatae, maxime enim.</span>
          <span className="h-[200px]"><img src={FTickets} alt='' className="h-full w-full"/></span>
        </div>
        <div className="my-6 w-[49%] px-6 justify-center items-center mt-4 flex flex-wrap flex-row-reverse">
          <span className="text-2xl w-[70%] font-medium mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque obcaecati fugiat provident. Sed excepturi facilis itaque ipsa voluptatem similique aliquam neque esse! Obcaecati molestiae accusantium ipsam. Beatae, maxime enim.</span>
          <span className="h-[200px]"><img src={FAttendee} alt='' className="h-full w-full"/></span>
        </div>
        <div className="my-6 w-[49%] px-6 justify-center items-center mt-4 flex flex-wrap flex-row-reverse">
          <span className="text-2xl w-[70%] font-medium mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque obcaecati fugiat provident. Sed excepturi facilis itaque ipsa voluptatem similique aliquam neque esse! Obcaecati molestiae accusantium ipsam. Beatae, maxime enim.</span>
          <span className="h-[200px]"><img src={FCertificate} alt='' className="h-full w-full"/></span>
        </div>
        </div>
      </BoxWrapper>
      <BoxWrapper bgcolor="Black" direction="row-reverse" textColor="White">
        <div className="flex flex-wrap flex-row-reverse justify-around w-[90%]">
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
