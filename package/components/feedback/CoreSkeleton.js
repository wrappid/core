import React from "react";
import { SCSkeleton } from "@wrappid/styled-components";

export default function CoreSkeleton(props) {
  return <SCSkeleton {...props}>{props.children}</SCSkeleton>;
}
