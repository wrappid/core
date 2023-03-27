import React from "react";
import UserChip from "../dataDisplay/custom/UserChip";
import CoreClasses from "../../styles/CoreClasses";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreAlert from "../feedback/CoreAlert";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";

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

/**
 *
 * @param {*} rowData
 * @returns
 */
function getCreatedDataComponent(rowData) {
  return (
    rowData?.createdAt && (
      <CoreAlert icon={false} severity="success" styleClasses={alertStyle}>
        <CoreTypographyCaption>
          Created at&nbsp;
          {(rowData?.createdAt &&
            new Date(rowData?.createdAt).toLocaleString()) ||
            "not known"}
        </CoreTypographyCaption>
        {rowData?.createdBy && (
          <>
            &nbsp;by&nbsp;
            <UserChip userid={rowData.createdBy} />
          </>
        )}
      </CoreAlert>
    )
  );
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getUpdatedDataComponent(rowData) {
  return (
    rowData?.updatedAt && (
      <CoreAlert icon={false} severity="warning" styleClasses={alertStyle}>
        <CoreTypographyCaption>
          Updated at&nbsp;
          {(rowData?.updatedAt &&
            new Date(rowData?.updatedAt).toLocaleString()) ||
            "not known"}
        </CoreTypographyCaption>
        {rowData?.updatedBy && (
          <>
            &nbsp;by&nbsp;
            <UserChip userid={rowData.updatedBy} />
          </>
        )}
      </CoreAlert>
    )
  );
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getDeletedDataComponent(rowData) {
  return (
    rowData?.deletedAt && (
      <CoreAlert icon={false} severity="error" styleClasses={alertStyle}>
        <CoreTypographyCaption>
          Deleted at&nbsp;
          {(rowData?.deletedAt &&
            new Date(rowData?.deletedAt).toLocaleString()) ||
            "not known"}
        </CoreTypographyCaption>
        {rowData?.deletedBy && (
          <>
            &nbsp;by&nbsp;
            <UserChip userid={rowData.deletedBy} />
          </>
        )}
      </CoreAlert>
    )
  );
}
