import React from "react";
import { SCSkeleton } from "../../styledComponents/feedback/SCSkeleton";

export default function CoreSkeleton(props) {
  return <SCSkeleton {...props}>{props.children}</SCSkeleton>;
}
