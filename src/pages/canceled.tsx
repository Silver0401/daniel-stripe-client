import React, { useEffect } from "react";
import useLottie from "lottie-react";
import CancelAnimation from "./../assets/cancel.json";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

const LottieAnimation = () => {
  const options = {
    animationData: CancelAnimation,
    loop: true,
    autoplay: true,
  };

  const View = useLottie(options);

  return View;
};

const CanceledPage: React.FC = () => {
  const History = useHistory();

  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
    },
    DesiredPosition: {
      opacity: 1,
    },
    ExitPosition: {
      opacity: 0,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      // window.location.href = "https://www.glampingmonterrey.com";
      History.push("/");
    }, 4000);
  }, []);

  return (
    <motion.div
      className="CanceledPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <div className="canceledHeader">
        <h1>Tu pago ha sido cancelado</h1>
        <p>
          En algunos segundos te redireccionaremos de regreso a la página de
          Inicio
        </p>
      </div>

      <div className="lottieContainer">
        <LottieAnimation />
      </div>
    </motion.div>
  );
};

export default CanceledPage;
