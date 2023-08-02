import React from "react";
import UserChip from "../dataDisplay/custom/UserChip";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreAlert from "../feedback/CoreAlert";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreClasses from "../../styles/CoreClasses";
import CoreStack from "../layouts/CoreStack";
import { getLabel } from "../../utils/stringUtils";
import { auditTypes } from "../../config/constants";

const alertStyle = [
  CoreClasses.PADDING.PX1,
  CoreClasses.PADDING.PY0,
  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
  CoreClasses.TEXT.TEXT_END,
];

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

function AuditDataComponent({type, rowData}) {
  return (
    rowData?.[`${type}At`] && (
      <CoreStack
        direction="row"
        spacing={1}
      >
        <CoreTypographyCaption>
          {`${getLabel(type)} at ${(rowData[`${type}At`] && new Date(rowData?.[`${type}At`]).toLocaleString()) || "not known"}`}
        </CoreTypographyCaption>
        <CoreTypographyCaption>
          {" by "}
        </CoreTypographyCaption>
        <UserChip titleVisible={false} component="span" userid={rowData[`${type}By`]} />
      </CoreStack>
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
  return <AuditDataComponent type={auditTypes.UPDATED} rowData={rowData} />;;
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getDeletedDataComponent(rowData) {
  return <AuditDataComponent type={auditTypes.DELETED} rowData={rowData} />;;
}
