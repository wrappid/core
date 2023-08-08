import React from "react";

import { FunctionsRegistryContext } from "../config/contextHandler";

export const getFunctions = () => {
  const functionsRegistry = React.useContext(FunctionsRegistryContext);
    
  return functionsRegistry;
};