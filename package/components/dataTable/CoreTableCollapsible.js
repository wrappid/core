// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars, import/default
import React, { useSelector } from "react-redux";

import TableRowAuditData from "./TableRowAuditData";
import CoreClasses from "../../styles/CoreClasses";
import CoreTableCell from "../dataDisplay/CoreTableCell";
import CoreTableRow from "../dataDisplay/CoreTableRow";
import CoreForm from "../forms/CoreForm";
import { FORM_VIEW_MODE } from "../forms/coreFormConstants";
import CoreCollapse from "../surfaces/CoreCollapse";

export default function CoreTableCollapsible({
  rowIndex,
  formID,
  open,
  ToggleOpen,
  mode = FORM_VIEW_MODE,
  columns,
  columnsLength,
  rowData,
  endpoint,
  successType,
  errorType,
  editable,
  deletable,
}) {
  const forms = useSelector((state) => state?.forms?.rawform) || {};

  return (
    <>
      {open && (
        <CoreTableRow>
          <CoreTableCell
            styleClasses={[CoreClasses.PADDING.P1]}
            colSpan={columnsLength || 1}
          >
            <CoreCollapse in={open} timeout="auto" unmountOnExit>
              <CoreForm
                apiMode={"edit"}
                onMountRead={false}
                formId={formID}
                mode={mode}
                allowEdit={editable}
                allowDelete={deletable}
                initData={rowData}
                afterEdit={() => {}}
                afterCancel={() => {
                  ToggleOpen(rowIndex);
                }}
              />

              <TableRowAuditData rowData={rowData} />
            </CoreCollapse>
          </CoreTableCell>
        </CoreTableRow>
      )}
    </>
  );
}
