import React, { useContext, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Context } from "./data/context";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/home";
import SuccessPage from "./pages/success";
import CanceledPage from "./pages/canceled";
import GlobalNav from "./components/nav";

const App: React.FC = () => {
  const { contextData } = useContext(Context);
  const Location = useLocation();

  useEffect(() => {
    console.log(`current Page: ${contextData.currentPage}`);
  }, [contextData]);

  return (
    <div className="App">
      {/* <GlobalNav /> */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={Location} key={Location.pathname}>
          <Route key="HomePage" exact path="/" component={HomePage} />
          <Route
            key="SuccessPage"
            exact
            path="/success"
            component={SuccessPage}
          />
          <Route
            key="CanceledPage"
            exact
            path="/canceled"
            component={CanceledPage}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
