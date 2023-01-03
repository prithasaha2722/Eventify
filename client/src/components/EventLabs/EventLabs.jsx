import React from "react";
import Home from "./Home/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {authActions} from '../../Store/index'
import Web3 from 'web3'

const EventLabs = () => {
  const dispatch = useDispatch();
  const { loginWithPopup } = useAuth0();
  useEffect(() => {
    loginWithPopup();
    connectWallet();
    
  }, []);
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated){
    dispatch(authActions.login({name: user.name, email: user.email, authenticated: isAuthenticated}))
  }

  const connectWallet = async() =>{
    const web3 = new Web3(window.ethereum)
    const account = await window.ethereum.request({method: "eth_requestAccounts"});
    dispatch(authActions.setWalletAddress(account[0]))
  }
  return (
    <div>
      <Home />
    </div>
  );
};

export default EventLabs;
