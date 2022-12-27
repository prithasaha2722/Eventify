import React from "react";
import { Route, Routes } from "react-router-dom";
import EventLabs from "../components/EventLabs/EventLabs";
import Home from "../components/Home/Home";
import Error from "./Error";

const Navigator = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventLabs" element={<EventLabs/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Navigator;
