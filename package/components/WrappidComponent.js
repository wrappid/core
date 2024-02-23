// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreCircularProgress from "./feedback/CoreCircularProgress";
// eslint-disable-next-line import/order
import CoreClasses from "../styles/CoreClasses";
// eslint-disable-next-line import/order
import CoreBox from "./layouts/CoreBox";

export default function WrappidComponent() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.H_100]}>
      <CoreCircularProgress />
    </CoreBox>
  );
}
