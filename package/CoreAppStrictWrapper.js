import React from "react";

// eslint-disable-next-line import/no-unresolved

import { ENV_DEV_MODE } from "./config/constants";

function CoreAppStrictWrapper(props) {
  const { mode = ENV_DEV_MODE } = props;

  return mode === ENV_DEV_MODE ? <React.StrictMode>{props?.children}</React.StrictMode> : props?.children;
}

export default CoreAppStrictWrapper;