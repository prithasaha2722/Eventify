import React from "react";
import { Route, Routes } from "react-router-dom";
import AllEvent from "../components/Eventify/AllEvents/AllEvent";
import Details from "../components/EventLabs/Details/Details";
import EventLabs from "../components/EventLabs/EventLabs";
import CheckInForm from "../components/Form/CheckInForm";
import EventForm from "../components/Form/EventForm";
import ParticipantForm from "../components/Form/ParticipantForm";
import RegistrationFrom from "../components/Form/RegistrationFrom";
import Error from "./Error";

const Navigation = () => {
  return (
    <main className="overflow-x-hidden bg-black">
      <Routes>
        <Route path="/" element={<AllEvent />} />
        <Route path="/new-Event" element={<EventLabs />} />
        <Route path="/new-Event/details" element={<Details />} />
        <Route
          path="/new-Event/:eventId/registrationForm"
          element={<RegistrationFrom />}
        />
        <Route path="/new-Event/registerEvent" element={<EventForm />} />
        <Route
          path="/events/:eventId/participationForm"
          element={<ParticipantForm />}
        />
        <Route path="participants/:eventId/checkOut" element={<CheckInForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Navigation;
