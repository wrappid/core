import React from "react";

import CoreH from "./CoreH";

export default function CoreH4(props) {
  return (
    <CoreH {...props} __level="h4">
      {props.children}
    </CoreH>
  );
}
