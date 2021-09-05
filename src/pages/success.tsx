import React, { useEffect } from "react";
import useLottie from "lottie-react";
import SuccessAnimation from "./../assets/success.json";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

const LottieAnimation = () => {
  const options = {
    animationData: SuccessAnimation,
    loop: false,
    autoplay: true,
  };

  const View = useLottie(options);

  return View;
};

const SuccessPage: React.FC = () => {
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
      className="SuccessPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <div className="canceledHeader">
        <h1>¡Tu pago ha sido exitoso!</h1>
        <p>
          Acabamos de registrar los datos de tu reservación, gracias por tu
          compra, en breve te llegará un correo como garantía de tu pago.
        </p>
      </div>

      <div className="lottieContainer">
        <LottieAnimation />
      </div>
    </motion.div>
  );
};

export default SuccessPage;
