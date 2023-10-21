// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCard } from "@wrappid/native";

export default function CoreCard(props) {
  return <NativeCard {...props} />;
}
CoreCard.validProps = [
  {
    description: "If true, the card will use raised styling.",
    name: "raised",
    types: [{ default: "FALSE", type: "bool", validValues: [true, false] }],
  },
];

CoreCard.invalidProps = ["sx", "classes"];
