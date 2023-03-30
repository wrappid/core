import React from "react";
import { CoreClasses } from "@wrappid/styles";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreStack from "../layouts/CoreStack";
import CoreCardHeader from "../surfaces/CoreCardHeader";
import { DATA_TABLE_CONST } from "./../../config/dataTableConstants";
import CoreTypographySubtitle1 from "./../dataDisplay/paragraph/CoreTypographySubtitle1";
import CoreTypographyBody1 from "./../dataDisplay/paragraph/CoreTypographyBody1";
import CoreTypographyCaption from "./../dataDisplay/paragraph/CoreTypographyCaption";

export default function CoreDataTableRowSummary(props) {
  const {
    tableColumns,
    rowData,
    summaryRendererComponent,
    hasId,
    hasStatus,
    getIdComponent,
    getStatusComponent,
    getImageComponent,
    getColumnLabel,
    priority1Data,
    priority2Data,
    priority3Data,
    priority4Data,
    priority5Data,
  } = props;

  const getTitleComponent = () => {
    return priority1Data ? (
      <CoreTypographySubtitle1
        limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
        hideSeeMore={true}
      >
        {priority1Data.data}
      </CoreTypographySubtitle1>
    ) : (
      ""
    );
  };
  const getSubheaderComponent = () => {
    return (
      <>
        {priority2Data ? (
          <CoreTypographyBody1
            limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
            hideSeeMore={true}
          >
            {priority2Data.data}
          </CoreTypographyBody1>
        ) : (
          ""
        )}
        <CoreStack direction="row" spacing={1}>
          {priority3Data ? (
            <CoreTypographyCaption>
              {getColumnLabel(priority3Data.column) + priority3Data.data}
            </CoreTypographyCaption>
          ) : (
            ""
          )}
          {priority4Data ? (
            <>
              {priority3Data ? (
                <CoreDivider orientation="vertical" variant="middle" flexItem />
              ) : (
                ""
              )}
              <CoreTypographyCaption>
                {getColumnLabel(priority4Data.column) + priority4Data.data}
              </CoreTypographyCaption>
            </>
          ) : (
            ""
          )}
          {priority5Data ? (
            <>
              {priority4Data ? (
                <CoreDivider orientation="vertical" variant="middle" flexItem />
              ) : (
                ""
              )}
              <CoreTypographyCaption>
                {getColumnLabel(priority5Data.column) + priority5Data.data}
              </CoreTypographyCaption>
            </>
          ) : (
            ""
          )}
        </CoreStack>
      </>
    );
  };
  return (
    <>
      {summaryRendererComponent ? (
        React.createElement(summaryRendererComponent, {
          tableColumns: tableColumns,
          rowData: rowData,
        })
      ) : (
        <>
          <CoreCardHeader
            avatar={getImageComponent()}
            title={getTitleComponent()}
            subheader={getSubheaderComponent()}
            styleClasses={[CoreClasses.PADDING.P0]}
          />
          {
            /* hasId ?  */ <>
              <CoreDivider />
              <CoreStack
                direction="row"
                spacing={1}
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}
              >
                {/* hasId &&  */ getIdComponent()}
                {/* hasStatus &&  */ getStatusComponent()}
              </CoreStack>
            </> /*  : null */
          }
        </>
      )}
    </>
  );
}
