import React from "react";
import Bg from "./Bg";
import Tabs from "./Tabs";

const Home = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-x-hidden">
      <Bg />
      <Tabs />
    </div>
  );
};

export default Home;
