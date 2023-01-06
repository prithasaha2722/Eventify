import React, { useContext } from "react";
import Home from "./Home/Home";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {authActions} from '../../Store/index'
import {TransactionContext} from '../../context/TransactionContext'

const EventLabs = () => {
  const dispatch = useDispatch();
  const { connectWallet, wallet } = useContext(TransactionContext)
  useEffect(() => {
    connectWallet();
    dispatch(authActions.setWalletAddress(wallet))
    
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default EventLabs;
