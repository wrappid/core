// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreContactLink, { commonContactLinkProps } from "./CoreContactLink";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreEmailLink(props) {
  props = sanitizeComponentProps(CoreEmailLink, props);
  const { email, ...restProps } = props;

  return (
    <CoreContactLink
      {...restProps} 
      variant="mail" 
      contact={email} 
    />
  );
}

CoreEmailLink.validProps = [{ description: "The email address to display and link to.", name: "email", types: [{ type: "string" }] }, ...commonContactLinkProps];
CoreEmailLink.invalidProps = [];