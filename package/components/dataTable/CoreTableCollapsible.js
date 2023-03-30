import * as React from "react";
import Collapse from "@mui/material/Collapse";
import CoreTableRow from "../dataDisplay/CoreTableRow";
import CoreTableCell from "../dataDisplay/CoreTableCell";
import CoreForm from "../forms/CoreForm";
import { FORM_VIEW_MODE } from "../forms/coreFormConstants";
import TableRowAuditData from "./TableRowAuditData";
import { CoreClasses } from "@wrappid/styles";
import { useSelector } from "react-redux";

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
            <Collapse in={open} timeout="auto" unmountOnExit>
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
            </Collapse>
          </CoreTableCell>
        </CoreTableRow>
      )}
    </>
  );
}
