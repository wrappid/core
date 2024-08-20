// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeClickAwayListner } from "@wrappid/native";

export default function CoreAwayListner (props){
  return (
    <NativeClickAwayListner {...props} />
  );
}

CoreAwayListner.validProps = [
  {
    name : "onClickAway",
    types: [{ type: "function" }],
  },
];

CoreAwayListner.invalidProps = [];
