import React from "react";
import { SCGridItem } from "@wrappid/styled-components";

export default function CoreGridItem(props) {
  return <SCGridItem props>{props.children}</SCGridItem>;
}
