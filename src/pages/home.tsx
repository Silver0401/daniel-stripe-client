import React, { useContext, useEffect } from "react";

import HomeLeftBox from "./../components/home/HomeLeftBox";
import HomeRightBox from "./../components/home/HomeRightBox";
import { Context } from "./../data/context";

const Home: React.FC = () => {
  const { contextData, setContextData } = useContext(Context);

  useEffect(() => {
    setContextData({ ...contextData, currentPage: "Home" });
  }, []);

  return (
    <div className="HomePage">
      <HomeLeftBox />
      <HomeRightBox />
    </div>
  );
};

export default Home;
