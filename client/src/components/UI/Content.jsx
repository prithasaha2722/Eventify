import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center p-2 shadow-xl w-full 2xl:min-w-[500px] py-4 bg-[#f7f7f7] rounded-xl">
      <div className="font-bold text-2xl 2xl:text-4xl w-full text-center ">Event Name</div>
      <div className="font-medium text-xl 2xl:text-3xl w-full text-center mt-5">Venue</div>
      <div className="text-lg 2xl:text-2xl w-full text-center mt-5">Description</div>
      <div className="flex flex-col 2xl:flex-row items-center justify-around w-full mt-5">
        <div className="flex flex-col  w-fit rounded-t-xl rounded-b-lg overflow-hidden shadow-2xl relative 2xl:h-[130px]">
          <span className=" bg-[#f336368f] text-[#ffffff] px-4 py-3 text-lg 2xl:text-2xl font-semibold">
            Ticket Price
          </span>
          <span className="w-full p-2 text-center text-lg 2xl:text-3xl flex items-center justify-center font-bold">20</span>
        </div>
        <div className="flex flex-col w-fit rounded-t-xl rounded-b-lg overflow-hidden shadow-2xl relative h-[130px] mt-3 2xl:mt-0">
          <span className=" bg-[#1F61E4] text-[#ececec] px-4 py-3 text-lg 2xl:text-2xl font-semibold">
            Event Date
          </span>
          <span className="w-full p-2 text-center text-xl flex flex-col items-center justify-center py-2 ">
            <div className="font-bold text-lg 2xl:text-2xl">Nov</div>
            <div className="text-lg 2xl:text-xl">20</div>
          </span>
        </div>
      </div>
      <button className="mt-5 p-4 rounded-xl bg-[#1F61E4] text-white font-medium text-md 2xl:text-3xl">Buy Ticket</button>
    </div>
  );
};

export default Content;
