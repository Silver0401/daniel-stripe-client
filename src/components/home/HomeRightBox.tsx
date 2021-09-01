import React from "react";
import { motion } from "framer-motion";

const HomeRightBox: React.FC = () => {
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

  return (
    <motion.div
      className="HomeRightBox"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <div className="TitlesBox">
        <h2>Bienvenido! Mi Nombre es</h2>
        <h1>Daniel Salas</h1>
        <h3>Tu experto y asesor en áreas de inversiones y finanzas</h3>
      </div>
      <div className="ButtonsBox">
        <button>Mi CV 📔</button>
        <button>Contrátame 🚀</button>
      </div>
    </motion.div>
  );
};

export default HomeRightBox;
