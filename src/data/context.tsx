import React, { createContext, useState } from "react";
import { contextProps, contextData } from "./types";

export const Context = createContext<contextProps>({
  contextData: {
    currentPage: "awaiting",
  },
  setContextData: () => {},
});

export const ContextProvider: React.FC = (props) => {
  const [contextData, setContextData] = useState<contextData>({
    currentPage: "awaiting",
  });

  return (
    <Context.Provider value={{ contextData, setContextData }}>
      {props.children}
    </Context.Provider>
  );
};
