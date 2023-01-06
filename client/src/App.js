import Navigation from "./pages/Navigation"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function App() {
  const {logout } = useAuth0();
  // useEffect(logout(),[])
  return (
    <div className="">
      <Navigation />
    </div>
  )
}