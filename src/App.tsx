import React, { useContext, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Context } from "./data/context";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import GlobalNav from "./components/nav";

const App: React.FC = () => {
  const { contextData } = useContext(Context);
  const Location = useLocation();

  useEffect(() => {
    console.log(`current Page: ${contextData.currentPage}`);
  }, [contextData]);

  return (
    <div className="App">
      <GlobalNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={Location} key={Location.pathname}>
          <Route key="HomePage" exact path="/" component={HomePage} />
          <Route key="AboutPage" exact path="/about" component={AboutPage} />
          <Route
            key="ContactPage"
            exact
            path="/contact"
            component={ContactPage}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
