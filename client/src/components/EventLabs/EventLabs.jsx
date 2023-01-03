import React from "react";
import Home from "./Home/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {authActions} from '../../Store/index'

const EventLabs = () => {
  const dispatch = useDispatch();
  const { loginWithPopup } = useAuth0();
  useEffect(() => {
    loginWithPopup();
    
  }, []);
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated){
    dispatch(authActions.login({name: user.name, email: user.email, authenticated: isAuthenticated}))
  }
  return (
    <div>
      <Home />
    </div>
  );
};

export default EventLabs;
