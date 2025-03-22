// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreContactLink, { commonContactLinkProps } from "./CoreContactLink";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CorePhoneLink(props) {
  props = sanitizeComponentProps(CorePhoneLink, props);
  const { phone, ...restProps } = props;

  return (
    <CoreContactLink
      {...restProps} 
      variant="phone" 
      contact={phone} 
    />
  );
}

CorePhoneLink.validProps = [{ description: "The phone number to display and link to.", name: "phone", types: [{ type: "string" }] }, ...commonContactLinkProps];
CorePhoneLink.invalidProps = [];
