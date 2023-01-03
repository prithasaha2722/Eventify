import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Store/index";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { TransactionProvider } from "./context/TransactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-a1efjti1dclq3w3q.au.auth0.com"
    clientId="31tN3r63ekyN9IDLlkJo4hhr7lDgh47K"
    redirectUri={window.location.origin}
  >
    <TransactionProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </TransactionProvider>
  </Auth0Provider>
);
