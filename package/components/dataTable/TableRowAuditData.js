// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { CoreClasses } from "@wrappid/core";

import { auditTypes } from "../../config/constants";
import { getLabel } from "../../utils/stringUtils";
import UserChip from "../dataDisplay/custom/UserChip";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";

/**
 *
 * @param {*} props
 * @returns
 */
export default function TableRowAuditData(props) {
  const { rowData } = props;

  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: { sm: 4 } }}>
        {getDeletedDataComponent(rowData)}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { sm: 4 } }}>
        {getUpdatedDataComponent(rowData)}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { sm: 4 } }}>
        {getCreatedDataComponent(rowData)}
      </CoreBox>
    </CoreGrid>
  );
}

function AuditDataComponent({ type, rowData }) {
  return (
    rowData?.[`${type}At`] &&
    rowData?.[`${type}By`] && (
      <CoreGrid styleClasses={[CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}>
        <CoreTypographyCaption gridProps={{ gridSize: 8 }}>
          {`${getLabel(type)} at ${
            (rowData[`${type}At`] &&
              new Date(rowData?.[`${type}At`]).toLocaleString()) ||
            "not known"
          }`}

          {" by "}
        </CoreTypographyCaption>

        <UserChip
          gridProps={{ gridSize: 4 }}
          component="span"
          userid={rowData[`${type}By`]}
        />
      </CoreGrid>
    )
  );
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getCreatedDataComponent(rowData) {
  return <AuditDataComponent type={auditTypes.CREATED} rowData={rowData} />;
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getUpdatedDataComponent(rowData) {
  return <AuditDataComponent type={auditTypes.UPDATED} rowData={rowData} />;
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getDeletedDataComponent(rowData) {
  return <AuditDataComponent type={auditTypes.DELETED} rowData={rowData} />;
}
