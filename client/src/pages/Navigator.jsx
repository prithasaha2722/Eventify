import React from "react";
import { Route, Routes } from "react-router-dom";
import Bannerify from "../components/Bannerify/Bannerify";
import Details from "../components/EventLabs/Details/Details";
import EventLabs from "../components/EventLabs/EventLabs";
import CertificateTemplate from "../components/Form/CertificateTemplate";
import EventForm from "../components/Form/EventForm";
import ParticipantForm from "../components/Form/ParticipantForm";
import RegistrationFrom from "../components/Form/RegistrationFrom";
import TicketTemplate from "../components/Form/TicketTemplate";
import Home from "../components/Home/Home";
import Error from "./Error";

const Navigator = () => {
  return (
    <main className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventLabs" element={<EventLabs />} />
        <Route path="/eventLabs/details" element={<Details />} />
        <Route path="/eventLabs/certificateTemplate" element={<CertificateTemplate />} />
        <Route path="/eventLabs/ticketsTemplate" element={<TicketTemplate />} />
        <Route path="/eventLabs/registrationForm" element={<RegistrationFrom />} />
        <Route path="/eventLabs/registerEvent" element={<EventForm />} />
        <Route path="/eventLabs/:eventId/participationForm" element={<ParticipantForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Navigator;
