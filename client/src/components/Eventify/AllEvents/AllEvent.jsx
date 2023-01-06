import React, { useContext, useState } from "react";
import Bg from "./Bg";
import EventArea from "./EventArea";
import {TransactionContext} from '../../../context/TransactionContext'
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {authActions} from '../../../Store/index'


const AllEvent = () => {
  const dispatch = useDispatch();
  const [events, setEvents] = useState();
  const { connectWallet, wallet } = useContext(TransactionContext);
  useEffect(() => {
    connectWallet();
    dispatch(authActions.setWalletAddress(wallet))
    fetchEvents();
    
  }, []);

  const fetchEvents = async() => {
    const Response = await fetch('/apiforevents')

    const data = await Response.json(); 
  }
  
  return (
    <div className="w-screen relative">
      <Bg />
      <EventArea events={events}/>
      <div className="relative bg-black xl:absolute mt-4 bottom-0 py-3 w-full flex flex-col xl:flex-row items-center justify-center text-xl xl:text-2xl 2xl:text-4xl">
        <div className="text-white">Developed By</div>
        <div className="text-[#ff0000] ml-4 font-medium">KoffeewithKoders</div>
      </div>
    </div>
  );
};

export default AllEvent;
