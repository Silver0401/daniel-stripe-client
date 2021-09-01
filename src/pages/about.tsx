import React, { useContext, useEffect } from "react";
import { Context } from "./../data/context";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const { contextData, setContextData } = useContext(Context);
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
    setContextData({ ...contextData, currentPage: "About" });
  }, []);

  return (
    <motion.div
      className="AboutPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <h1>About Information</h1>

      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
    </motion.div>
  );
};

export default About;
