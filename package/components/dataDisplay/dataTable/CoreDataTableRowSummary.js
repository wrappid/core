// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { DATA_TABLE_CONST } from "../../../config/dataTableConstants";
import CoreStack from "../../layouts/CoreStack";
import CoreCardHeader from "../../surfaces/CoreCardHeader";
import CoreDivider from "../CoreDivider";
import CoreTypographyBody1 from "../CoreTypographyBody1";
import CoreTypographyCaption from "../CoreTypographyCaption";
import CoreTypographySubtitle1 from "../CoreTypographySubtitle1";

export default function CoreDataTableRowSummary(props) {
  const {
    tableColumns,
    rowData,
    summaryRendererComponent,
    // hasId,
    // hasStatus,
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
          rowData     : rowData,
          tableColumns: tableColumns,
        })
      ) : (
        <>
          <CoreCardHeader
            avatar={getImageComponent()}
            title={getTitleComponent()}
            subheader={getSubheaderComponent()}
            styleClasses={[UtilityClasses.PADDING.P0]}
          />

          {
            /* hasId ?  */ <>
              <CoreDivider />

              <CoreStack
                direction="row"
                spacing={1}
                styleClasses={[UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}
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
