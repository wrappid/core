import React from "react";
import { SCAutocomplete } from "../../styledComponents/inputs/SCAutocomplete";

export default function CoreAutocomplete(props) {
  return <SCAutocomplete {...props}>{props.children}</SCAutocomplete>;
}
