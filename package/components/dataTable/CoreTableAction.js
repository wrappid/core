// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/styled-components";

import CoreResponsiveButton from "../inputs/custom/CoreResponsiveButton";

export default function CoreTableAction(props) {
  const navigation = nativeUseNavigate();
  const { tableUUID, actions = [], rowData = {} } = props;

  return (
    <>
      {actions &&
        Array.isArray(actions) &&
        actions.length > 0 &&
        actions.map((action, actionIndex) =>
          action.hide && action.hide(rowData) ? null : (
            <CoreResponsiveButton
              key={action?.id ? `${tableUUID}-action-${action?.id}` : `${tableUUID}-action-${actionIndex}`}
              label={action?.label}
              icon={action?.icon}
              disabled={action.disabled}
              OnClick={() => {
                if (action?.action) action?.action(rowData); // TODO: support local action
                if (action.route) {
                  navigation(action.route, rowData);
                }
              }}
            />
          )
        )}
    </>
  );
}
