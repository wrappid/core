import * as React from "react";

import CoreTooltip from "../dataDisplay/CoreTooltip";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreIcon from "../dataDisplay/CoreIcon";

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
