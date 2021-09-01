import React, { useContext, useEffect } from "react";
import { Context } from "./../data/context";
import { motion } from "framer-motion";

import ContactLeftBox from "../components/contact/ContactLeftBox";
import ContactRightBox from "../components/contact/ContactRightBox";

const Contact: React.FC = () => {
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
    setContextData({ ...contextData, currentPage: "Contact" });
  }, []);

  return (
    <motion.div
      className="ContactPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <ContactLeftBox />
      <ContactRightBox />
    </motion.div>
  );
};

export default Contact;
