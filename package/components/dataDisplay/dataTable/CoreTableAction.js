// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate, NativeFlatList } from "@wrappid/native";

import CoreResponsiveButton from "../../inputs/CoreResponsiveButton";

export default function CoreTableAction(props) {
  const navigation = nativeUseNavigate();
  const {
    tableUUID,
    actions = [],
    rowData = {},
    set_showDetailsPane,
    setDetailedRowId,
    setDetailedRowData,
  } = props;

  const renderAction = (action, actionIndex) => {
    if (action.hide && action.hide(rowData)) {
      return null;
    } else {
      return (
        <CoreResponsiveButton
          key={
            action?.id
              ? `${tableUUID}-action-${action?.id}`
              : `${tableUUID}-action-${actionIndex}`
          }
          label={action?.label}
          icon={action?.icon}
          disabled={action.disabled}
          OnClick={() => {
            if (action.clearRowData) {
              set_showDetailsPane(true);
              setDetailedRowId(null);
              setDetailedRowData(null);
            }
            if (action?.action) action?.action(rowData); // TODO: support local action
            if (action.route) {
              navigation(action.route, rowData);
            }
          }}
        />
      );
    }
  };

  return (
    actions &&
    Array.isArray(actions) && (
      <NativeFlatList
        tableData={actions}
        renderItem={renderAction}
        horizontal={true}
        keyExtractor={(item, index) => {
          return tableUUID + "-action-" + index;
        }}
      />
    )
  );
}
