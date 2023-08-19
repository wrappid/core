// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";

export default function CoreH5(props) {
  return (
    <CoreH {...props} __level="h5">
      {props.children}
    </CoreH>
  );
}
