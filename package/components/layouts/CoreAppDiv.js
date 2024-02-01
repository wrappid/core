// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAppDiv } from "@wrappid/native";
import { useSelector } from "react-redux";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAppDiv(props) {
  props = sanitizeComponentProps(CoreAppDiv, props);
  let uid = useSelector((state) => state?.auth?.uid);

  return <NativeAppDiv {...props} uid={uid} />;
}

CoreAppDiv.validProps = [];
CoreAppDiv.invalidProps = [];