import React from "react";
import CoreH from "./CoreH";

export default function CoreH6(props) {
  return (
    <CoreH {...props} __level="h6">
      {props.children}
    </CoreH>
  );
}
