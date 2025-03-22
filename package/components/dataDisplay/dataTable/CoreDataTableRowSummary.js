// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { DATA_TABLE_CONST } from "../../../config/dataTableConstants";
import CoreClasses from "../../../styles/CoreClasses";
import CoreStack from "../../layouts/CoreStack";
import CoreCardHeader from "../../surfaces/CoreCardHeader";
import CoreDivider from "../CoreDivider";
import CoreTypographyCaption from "../CoreTypographyCaption";
import CoreTypographySubtitle1 from "../CoreTypographySubtitle1";
import CoreTypographySubtitle2 from "../CoreTypographySubtitle2";

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
      <CoreTypographySubtitle2
        styleClasses={[CoreClasses.MARGIN.MB0]}
        limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
        hideSeeMore={true}
      >
        {priority1Data.data}
      </CoreTypographySubtitle2>
    ) : (
      ""
    );
    // return priority1Data && (priority1Data?.data || "");
  };
  const getSubheaderComponent = () => {
    return (
      <>
        {priority2Data ? (
          <CoreTypographySubtitle1
            styleClasses={[CoreClasses.MARGIN.MB0]}
            limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
            hideSeeMore={true}
          >
            {priority2Data.data}
          </CoreTypographySubtitle1>
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

  const getHeaderProps = () => {
    let headerProps = {
      avatar      : getImageComponent(),
      styleClasses: [UtilityClasses.PADDING.P0],
      subheader   : getSubheaderComponent(),
      title       : getTitleComponent(),
    };

    return headerProps;
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
            {...getHeaderProps()}
          />

          {
            /* hasId ?  */ <>
              <CoreDivider />

              <CoreStack
                direction="row"
                spacing={1}
                styleClasses={[UtilityClasses.DISPLAY.FLEX, UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}
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
