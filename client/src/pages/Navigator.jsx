import React from "react";
import { Route, Routes } from "react-router-dom";
import Bannerify from "../components/Bannerify/Bannerify";
import Details from "../components/EventLabs/Details/Details";
import EventLabs from "../components/EventLabs/EventLabs";
import Home from "../components/Home/Home";
import Error from "./Error";

const Navigator = () => {
  return (
    <main className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bannerify" element={<Bannerify/>}/>
        <Route path="/eventLabs" element={<EventLabs />} />
        <Route path="/eventLabs/details" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Navigator;
