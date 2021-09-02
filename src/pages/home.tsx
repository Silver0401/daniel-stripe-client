import React, { useContext, useEffect } from "react";
import { Context } from "./../data/context";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useStripe } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: React.FC = () => {
  const { contextData, setContextData } = useContext(Context);
  const stripe = useStripe();

  useEffect(() => {
    setContextData({ ...contextData, currentPage: "Home" });
    // console.log(process.env.REACT_APP_NOT_STRIPE_KEY);
  }, []);

  const createCheckoutSession = async () => {
    const line_items = [
      {
        price_data: {
          currency: "usd",
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
        `${process.env.REACT_APP_NOT_BACKEND_URL}/create-checkout-session`,
        { line_items, customer_email: "prosilver05@gmail.com" }
      )
      .then(async (res: any) => {
        console.log(res);
        await stripe?.redirectToCheckout({
          sessionId: res.data.sessionId,
        });
      })
      .catch((err) => {
        toast.error(`FE error: ${err}`);
        console.log(err.response);
        console.log(err.request);
        console.log(err.message);
      });
  };

  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <div className="stripeButtons">
        <Button onClick={createCheckoutSession} size="lg" colorScheme="teal">
          Stripe Checkout
        </Button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
