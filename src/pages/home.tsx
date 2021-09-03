import React, { useContext, useEffect, useState } from "react";
import { Context } from "./../data/context";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useStripe } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoImg from "./../assets/coso.jpeg";

const Home: React.FC = () => {
  const { contextData, setContextData } = useContext(Context);
  const [selectedPayment, setSelectedPayment] = useState<
    "one" | "monthly" | null
  >(null);
  const stripe = useStripe();

  useEffect(() => {
    setContextData({ ...contextData, currentPage: "Home" });
  }, []);

  const createOneTimeCheckoutSession = async () => {
    const line_items = [
      {
        price_data: {
          currency: "mxn",
          product_data: {
            name: "Cosox",
            description: "cosos de coso",
            images: [
              "https://concepto.de/wp-content/uploads/2019/03/reino-animal-portada.jpg",
            ],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ];

    axios
      .post(
        `${process.env.REACT_APP_NOT_BACKEND_URL}/create-one-time-checkout-session`,
        { line_items, customer_email: "prosilver05@gmail.com" }
      )
      .then(async (res: any) => {
        await stripe?.redirectToCheckout({
          sessionId: res.data.sessionId,
        });
      })
      .catch((err) => {
        toast.error(`FE error: ${err}`);
      });
  };

  const createMonthlyCheckoutSession = async () => {
    const line_items = [
      {
        price_data: {
          currency: "mxn",
          recurring: {
            interval: "month",
            interval_count: 1,
          },
          product_data: {
            name: "Cosox",
            description: "cosos de coso",
            images: [
              "https://concepto.de/wp-content/uploads/2019/03/reino-animal-portada.jpg",
            ],
          },
          unit_amount: 2000,
        },
        quantity: 1,
        // price: "price_1JVMhtBwVvvXbSw3KQIjvVqw",
      },
    ];

    axios
      .post(
        `${process.env.REACT_APP_NOT_BACKEND_URL}/create-monthly-checkout-session`,
        { line_items, customer_email: "prosilver05@gmail.com" }
      )
      .then(async (res: any) => {
        await stripe?.redirectToCheckout({
          sessionId: res.data.sessionId,
        });
      })
      .catch((err) => {
        toast.error(`FE error: ${err}`);
      });
  };

  const returnSvg = (svgName: "oneTimePayment" | "monthlyPayment") => {
    const svgObject = {
      oneTimePayment: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12zm-20 3.78c0-.431.349-.78.78-.78h.427v1.125h-1.207v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm4 .288c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.744v-4h1.593c.431 0 .78.349.78.78v.345zm5.5 2.875c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c.484 0 .937.138 1.32.377-.53.552-.856 1.3-.856 2.123 0 .824.326 1.571.856 2.123-.383.239-.836.377-1.32.377zm1.5-2.5c0-1.381 1.12-2.5 2.5-2.5 1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5c-1.38 0-2.5-1.119-2.5-2.5zm-8 4.5h-3v1h3v-1zm4 0h-3v1h3v-1zm5 0h-3v1h3v-1zm4 0h-3v1h3v-1z" />
        </svg>
      ),
      monthlyPayment: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-19 5.78c0-.431.349-.78.78-.78h.428v1.125h-1.208v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm3 5.068h-3v-1h3v1zm1-4.78c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.743v-4h1.592c.431 0 .78.349.78.78v.345zm4 6.875h-3v-1h3v1zm1-6.5c0-1.381 1.119-2.5 2.5-2.5.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.327 1.571.857 2.123-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5zm4 6.5h-3v-1h3v1zm5 0h-3v-1h3v1zm-2.5-4c-1.38 0-2.5-1.119-2.5-2.5s1.12-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z" />
        </svg>
      ),
    };

    return svgObject[svgName];
  };

  return (
    <div className="HomePage">
      <div className="PaymentSection">
        <div className="header">
          <img src={LogoImg} alt="Logo" />
          <h1>Glamping Monterrey</h1>
        </div>
        <ul className="stripeButtons">
          <h2>Selecciona tu método de pago:</h2>

          <li onClick={() => setSelectedPayment("one")}>
            <input
              type="checkbox"
              checked={selectedPayment === "one" ? true : false}
            />
            <label>Pago de Contado</label>
            {returnSvg("oneTimePayment")}
          </li>

          <li onClick={() => setSelectedPayment("monthly")}>
            <input
              type="checkbox"
              checked={selectedPayment === "monthly" ? true : false}
            />
            <label>Pago de 5 Plazos</label>
            {returnSvg("monthlyPayment")}
          </li>

          <Button
            onClick={() => {
              selectedPayment === "one"
                ? createOneTimeCheckoutSession()
                : selectedPayment === "monthly"
                ? createMonthlyCheckoutSession()
                : toast.error("Necesitas escoger una de las opciones");
            }}
            size="lg"
            colorScheme="linkedin"
          >
            Continuar
          </Button>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
