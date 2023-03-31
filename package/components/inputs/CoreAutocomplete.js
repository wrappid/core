import React from "react";
import { SCAutocomplete } from "@wrappid/styled-components";

export default function CoreAutocomplete(props) {
  return <SCAutocomplete {...props}>{props.children}</SCAutocomplete>;
}
