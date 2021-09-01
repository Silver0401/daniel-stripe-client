import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import BitcoinModel from "../models/bitcoin";

const HomeLeftBox: React.FC = () => {
  const MotionTransitionVariants1 = {
    initPosition: {
      // opacity: 0,
      transform: "translateX(-130%)",
      transition: {
        duration: 1,
      },
    },
    DesiredPosition: {
      // opacity: 1,
      transform: "translateX(0%)",
      transition: {
        duration: 1,
      },
    },
    ExitPosition: {
      // opacity: 0,
      transform: "translateX(-130%)",
      transition: {
        duration: 1,
      },
    },
  };

  const MotionTransitionVariants2 = {
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
    <div className="HomeLeftBox">
      <motion.div
        className="ModelBox"
        variants={MotionTransitionVariants2}
        initial={"initPosition"}
        animate={"DesiredPosition"}
        exit={"ExitPosition"}
      >
        <Canvas id="Canvas" shadows camera={{ position: [0, 0, 70], fov: 100 }}>
          <ambientLight color={"yellow"} intensity={0.5} />
          <pointLight
            castShadow
            position={[100, 100, 400]}
            intensity={1}
            color={"yellow"}
          />
          <directionalLight
            castShadow
            intensity={10}
            position={[0, 200, 0]}
            color={"yellow"}
          />
          <Suspense fallback={null}>
            <BitcoinModel />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        className="bgContainer"
        variants={MotionTransitionVariants1}
        initial={"initPosition"}
        animate={"DesiredPosition"}
        exit={"ExitPosition"}
      >
        <svg
          id="bgWaves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L0,192L160,192L160,128L320,128L320,288L480,288L480,160L640,160L640,32L800,32L800,64L960,64L960,256L1120,256L1120,96L1280,96L1280,192L1440,192L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"
          ></path>
        </svg>

        <div className="bgStuff">
          <div className="middleCircle" />
          <div className="tlbox">
            <span>
              <div id="line1" />
            </span>
            <span>
              <div id="line2" />
            </span>
            <span>
              <div id="bullet" />
            </span>
          </div>
          <div className="trbox">
            <span>
              <div id="line1" />
            </span>
            <span>
              <div id="line2" />
            </span>
            <span>
              <div id="bullet" />
            </span>
          </div>
          <div className="brbox">
            <span>
              <div id="line1" />
            </span>
            <span>
              <div id="line2" />
            </span>
            <span>
              <div id="bullet" />
            </span>
          </div>
          <div className="blbox">
            <span>
              <div id="line1" />
            </span>
            <span>
              <div id="line2" />
            </span>
            <span>
              <div id="bullet" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeLeftBox;
