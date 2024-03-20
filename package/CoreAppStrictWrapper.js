import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import { ENV_DEV_MODE } from "./config/constants";

function CoreAppStrictWrapper(props) {
  let { config } = React.useContext(WrappidDataContext);

  return config?.environment === ENV_DEV_MODE ? <React.StrictMode>{props?.children}</React.StrictMode> : props?.children;
}

export default CoreAppStrictWrapper;