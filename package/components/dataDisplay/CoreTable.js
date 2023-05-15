import React from "react";
import { getUUID } from "../../utils/appUtils";
import { NativeTable } from "@wrappid/styled-components";

export default function CoreTable(props) {
  let _uuid = getUUID();
  let containerId = props?.coreId ? "tc_" + props.coreId : "tc_" + _uuid;

  return (
    <NativeTable coreId={containerId} {...props}>
      {props.children}
    </NativeTable>
  );
}
