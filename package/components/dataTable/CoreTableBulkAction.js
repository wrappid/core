// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTooltip from "../dataDisplay/CoreTooltip";
import CoreIconButton from "../inputs/CoreIconButton";

export default function CoreTableBulkAction({ bulkActions, selected }) {
  return (
    bulkActions &&
    bulkActions.map((ac) =>
      ac.iconName === "delete" ? (
        <CoreTooltip title="Delete">
          <CoreIconButton
            onClick={() => {
              ac.action(selected);
            }}
          >
            <CoreIcon>delete</CoreIcon>
          </CoreIconButton>
        </CoreTooltip>
      ) : null
    )
  );
}
