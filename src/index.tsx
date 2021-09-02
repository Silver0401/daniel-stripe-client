import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/css/index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./data/context";
import { ChakraProvider } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51I2XfOBwVvvXbSw3t1tAdKjpsto1DYeBkb71GrTineG3wCf2Uf0yq54TGCJGMtKvxN5HPlCAFm0qV68zrhaKDbh800LCB6fOU7"
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ContextProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </ContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
