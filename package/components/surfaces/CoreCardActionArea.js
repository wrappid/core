// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCardActionArea } from "@wrappid/native";

export default function CoreCardActionArea(props) {

  return <NativeCardActionArea {...props}>{props.children}</NativeCardActionArea>;
}
