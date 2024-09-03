// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableHeadRow } from "@wrappid/native";

import CoreTableRow from "./CoreTableRow";

export default function CoreTableHeadRow(props) {
  return <NativeTableHeadRow {...props}>{props.children}</NativeTableHeadRow>;
}
CoreTableHeadRow.validProps = [...CoreTableRow.validProps];
CoreTableHeadRow.invalidProps = [];
