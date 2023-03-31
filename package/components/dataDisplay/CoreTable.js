import React from "react";
import { getUUID } from "../../utils/appUtils";
import { SCTable } from "@wrappid/styled-components";

export default function CoreTable(props) {
  let _uuid = getUUID();
  let containerId = props?.coreId ? "tc_" + props.coreId : "tc_" + _uuid;

  return (
    <SCTable coreId={containerId} {...props}>
      {props.children}
    </SCTable>
  );
}
