import React from "react";
import CoreTableCell from "./CoreTableCell";

/**
 * @todo
 * after ellipsis support review
 *
 * @param {*} props
 * @returns
 */
export default function CoreTableBodyCell(props) {
  return (
    <CoreTableCell {...props}>
      {/* <CoreTypographyBody1 lineLimit={2}>{props.children}</CoreTypographyBody1> */}
      {props.children}
    </CoreTableCell>
  );
}
