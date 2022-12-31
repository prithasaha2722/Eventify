import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../components/EventLabs/Details/Details";
import EventLabs from "../components/EventLabs/EventLabs";
import BanerifyForm from "../components/Form/BannerifyForm";
import CertificateTemplate from "../components/Form/CertificateTemplate";
import CheckInForm from "../components/Form/CheckInForm";
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
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<EventLabs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/bannerForm" element={<BanerifyForm />} />
        <Route path="/certificateTemplate" element={<CertificateTemplate />} />
        <Route path="/ticketsTemplate" element={<TicketTemplate />} />
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
