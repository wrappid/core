// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";

export default function CoreH1(props) {
  return (
    <CoreH {...props} __level="h1">
      {props.children}
    </CoreH>
  );
}
