// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTable } from "@wrappid/native";

import { getUUID } from "../../utils/appUtils";

export default function CoreTable(props) {
  let _uuid = getUUID();
  let containerId = props?.coreId ? "tc_" + props.coreId : "tc_" + _uuid;

  return (
    <NativeTable coreId={containerId} {...props}>
      {props.children}
    </NativeTable>
  );
}
