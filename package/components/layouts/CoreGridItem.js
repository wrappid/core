import React from "react";
import { SCGridItem } from "../../styledComponents/layouts/SCGridItem";

export default function CoreGridItem(props) {
  return <SCGridItem props>{props.children}</SCGridItem>;
}
