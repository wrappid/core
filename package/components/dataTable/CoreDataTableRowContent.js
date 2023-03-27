import React from "react";
import CoreTableCell from "./../dataDisplay/CoreTableCell";
import CoreDataTableRowSummary from "./CoreDataTableRowSummary";
import CoreClasses from "./../../styles/CoreClasses";
import { DATA_TABLE_CONST } from "./../../config/dataTableConstants";
import {
  getColumnLabel,
  getStatusTextColorClass,
  setPriorityBasedData,
} from "./../../utils/tableUtils";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreTypographyBody2 from "../dataDisplay/paragraph/CoreTypographyBody2";
import CoreTableBodyCell from "../dataDisplay/CoreTableBodyCell";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreIcon from "../dataDisplay/CoreIcon";
import { isJson } from "../../utils/stringUtils";
import CoreDivider from "../dataDisplay/CoreDivider";
import StatusText from "../dataDisplay/custom/StatusText";

export default function CoreDataTableRowContent(props) {
  const {
    tableUUID,
    tableColumns,
    tableColumnsShown,
    tableColumnsToShow,
    rowIndex,
    rowData,
    enableDetailsPane,
    _showDetailsPane,
    summaryRendererComponent,
  } = props;

  const [hasId, setHasId] = React.useState(false);
  const [idData, setIdData] = React.useState(null);
  const [hasStatus, setHasStatus] = React.useState(false);
  const [statusData, setStatusData] = React.useState(null);
  const [hasImage, setHasImage] = React.useState(false);
  const [imageData, setImageData] = React.useState(null);
  // const [hasPriority1, setHasPriority1] = React.useState(false);
  const [priority1Data, setPriority1Data] = React.useState(null);
  // const [hasPriority2, setHasPriority2] = React.useState(false);
  const [priority2Data, setPriority2Data] = React.useState(null);
  // const [hasPriority3, setHasPriority3] = React.useState(false);
  const [priority3Data, setPriority3Data] = React.useState(null);
  // const [hasPriority4, setHasPriority4] = React.useState(false);
  const [priority4Data, setPriority4Data] = React.useState(null);
  // const [hasPriority5, setHasPriority5] = React.useState(false);
  const [priority5Data, setPriority5Data] = React.useState(null);

  React.useEffect(() => {
    /**
     * if summaryRendererComponent
     *    render summaryRendererComponent with tableColumns, rowData
     * else
     *    if tableColumns priority is set
     *      use the column
     *    else
     *      find that priority level default column
     */

    // let addedCount = 0;
    // const tableColumnsToShow = tableColumns?.filter((tableCol, index) => {
    //   if (Boolean(tableCol.priority) && addedCount < DATA_TABLE_CONST.DEFAULT_MAX_COLUMNS_COUNT) {
    //     addedCount++;
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // if (tableColumnsToShow && tableColumnsToShow.length > 0) {
    //   // do nothing
    //   // no more data preparation is needed as user has provided priority
    // } else {
    // prepare columns intelligently
    let lastProcessedPriority = DATA_TABLE_CONST.LOWEST_PRIORITY;
    let usedColumnIds = [];
    DATA_TABLE_CONST.DEFAULT_COLUMNS_IDS.sort(
      (firstCol, secondCol) =>
        firstCol.priority - secondCol.priority ||
        firstCol.order - secondCol.order
    ).forEach((defaultCol, index) => {
      if (defaultCol.priority > lastProcessedPriority) {
        tableColumns.forEach((tableColumn, index) => {
          if (tableColumn.id === defaultCol.id) {
            // tableColumn has defaultColumn
            if (usedColumnIds.includes(defaultCol.id) === false) {
              // tableColumn is not used yet

              setPriorityBasedData(
                rowData,
                tableColumn,
                defaultCol,
                setIdData,
                setHasId,
                setStatusData,
                setHasStatus,
                imageData,
                setImageData,
                setHasImage,
                setPriority1Data,
                setPriority2Data,
                setPriority3Data,
                setPriority4Data,
                setPriority5Data
              );
              // tableColumnsToShow.push({ ...tableColumn, priority: defaultCol.priority });
              usedColumnIds.push(defaultCol.id);
              lastProcessedPriority = defaultCol.priority;
            }
          } else {
            /**
             * @todo to check if it is needed to prepare tableColumnsToShow
             *       based on availability of defaultCol.id in rowData
             */
          }
        });
      }
    });
    // }
  }, [rowData]);

  const getImageComponent = () => {
    return imageData?.column?.id?.includes("icon") ? (
      imageData?.data && (
        <CoreIcon
          styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY_DARK]}
          options={
            isJson(imageData.data)
              ? JSON.parse(imageData.data)
              : { icon: imageData.data }
          }
        />
      )
    ) : imageData?.column?.id?.includes("photoUrl") ? (
      <CoreAvatar
        src={imageData?.data || "no_image.png"}
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
      ></CoreAvatar>
    ) : null;
  };

  // export const getOtherDataComponent = () => {};
  const getIdComponent = () => {
    return (
      <CoreTypographyCaption>{"ID: " + idData?.data}</CoreTypographyCaption>
    );
  };
  const getStatusComponent = () => {
    return (
      <>
        {hasId ? (
          <CoreDivider orientation="vertical" variant="middle" flexItem />
        ) : (
          ""
        )}
        <CoreTypographyCaption
          styleClasses={[
            getStatusTextColorClass(statusData?.data || ""),
            CoreClasses.TEXT.TEXT_WEIGHT_BOLD,
            CoreClasses.TEXT.TEXT_UPPERCASE,
          ]}
        >
          {statusData?.data || "UNKNOWN"}
        </CoreTypographyCaption>
      </>
    );
  };

  return (
    <>
      {enableDetailsPane && _showDetailsPane ? (
        <CoreTableCell styleClasses={[CoreClasses.PADDING.PX1]}>
          <CoreDataTableRowSummary
            tableColumns={tableColumns}
            rowData={rowData}
            summaryRendererComponent={summaryRendererComponent}
            hasId={hasId}
            hasStatus={hasStatus}
            getIdComponent={getIdComponent}
            getStatusComponent={getStatusComponent}
            getImageComponent={getImageComponent}
            getColumnLabel={getColumnLabel}
            priority1Data={priority1Data}
            priority2Data={priority2Data}
            priority3Data={priority3Data}
            priority4Data={priority4Data}
            priority5Data={priority5Data}
          />
        </CoreTableCell>
      ) : (
        <>
          {tableColumns &&
            tableColumns.length > 0 &&
            tableColumnsToShow &&
            tableColumnsToShow.length > 0 &&
            tableColumns
              ?.filter((col) => {
                return tableColumnsToShow?.includes(col.id);
              })
              ?.map((tableColumn, cellIndex) => {
                return (
                  <CoreTableBodyCell
                    key={tableUUID + "-tr-" + rowIndex + "-td-" + cellIndex}
                  >
                    {tableColumn.render ? (
                      tableColumn.renderType === "component" ? (
                        React.createElement(tableColumn?.render, {
                          data: rowData[tableColumn.id],
                          rowData: rowData,
                        })
                      ) : (
                        tableColumn.render(rowData[tableColumn.id], rowData)
                      )
                    ) : rowData[tableColumn.id] !== null &&
                      typeof rowData[tableColumn.id] === "object" ? (
                      <CoreTypographyBody2
                        limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
                        hideSeeMore={true}
                      >
                        {JSON.stringify(rowData[tableColumn.id], null, 4)}
                      </CoreTypographyBody2>
                    ) : typeof rowData[tableColumn.id] === "boolean" ? (
                      rowData[tableColumn.id] === true ? (
                        "True"
                      ) : (
                        "False"
                      )
                    ) : tableColumn.id === "_status" ? (
                      <StatusText status={rowData[tableColumn.id]} />
                    ) : (
                      <CoreTypographyBody2
                        limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
                        hideSeeMore={true}
                      >
                        {rowData.hasOwnProperty(tableColumn.id)
                          ? rowData[tableColumn.id]
                          : "Not Given"}
                      </CoreTypographyBody2>
                    )}
                  </CoreTableBodyCell>
                );
              })}
        </>
      )}
    </>
  );
}
