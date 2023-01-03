import React from "react";
import { Route, Routes } from "react-router-dom";
import AllEvent from "../components/Eventify/AllEvents/AllEvent";
import Details from "../components/EventLabs/Details/Details";
import EventLabs from "../components/EventLabs/EventLabs";
import CheckInForm from "../components/Form/CheckInForm";
import EventForm from "../components/Form/EventForm";
import ParticipantForm from "../components/Form/ParticipantForm";
import RegistrationFrom from "../components/Form/RegistrationFrom";
import Home from "../components/Home/Home";
import Error from "./Error";

const Navigator = () => {
  return (
    <main className="overflow-x-hidden bg-black">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path='/allevents' element={<AllEvent/>}/>
        <Route path="/" element={<EventLabs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/:eventId/registrationForm" element={<RegistrationFrom />} />
        <Route path="/registerEvent" element={<EventForm />} />
        <Route path="/:eventId/participationForm" element={<ParticipantForm />} />
        <Route path="/:eventId/checkin" element={<CheckInForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Navigator;
