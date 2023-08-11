// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";

export default function CoreH3(props) {
  return (
    <CoreH {...props} __level="h3">
      {props.children}
    </CoreH>
  );
}
