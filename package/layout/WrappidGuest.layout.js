// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreBox from "../components/layouts/CoreBox";
import CoreClasses from "../styles/CoreClasses";

export default function WrappidGuestLayout(props) {
  return (
    <CoreBox>
      {props.children}
    </CoreBox>
  );
}
