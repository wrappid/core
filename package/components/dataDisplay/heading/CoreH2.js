import React from "react";
import CoreH from "./CoreH";

export default function CoreH2(props) {
  return (
    <CoreH {...props} __level="h2">
      {props.children}
    </CoreH>
  );
}
