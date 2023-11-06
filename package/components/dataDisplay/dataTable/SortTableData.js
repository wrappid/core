// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../styles/CoreClasses";
import { getLabel } from "../../utils/stringUtils";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreIcon, { __IconTypes } from "../dataDisplay/CoreIcon";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreInputAdornment from "../inputs/CoreInputAdornment";
import CoreTextField from "../inputs/CoreTextField";
import CoreBox from "../layouts/CoreBox";
import CoreStack from "../layouts/CoreStack";

export default function SortTableData(props) {
  const { tableUUID, tableColumns, auditColumnsKey, order, onRequestSort } =
    props;

  const [searchString, setSearchString] = React.useState(null);
  const [searchedColumns, setSearchedColumns] = React.useState([]);

  React.useEffect(() => {
    if (searchString) {
      let tmpSearchString = searchString?.toLocaleLowerCase();

      console.log("########################");
      console.log(`Searched Column String: ${searchString}`);
      console.log(
        `Searched Column String: ${tableColumns?.filter((tblCol) => {
          return (
            !auditColumnsKey.includes(tblCol?.id?.toLocaleLowerCase()) &&
            (tblCol?.label?.toLocaleLowerCase().includes(tmpSearchString) ||
              getLabel(tblCol?.id)
                ?.toLocaleLowerCase()
                .includes(tmpSearchString))
          );
        })}`
      );
      console.log("########################");
      setSearchedColumns(
        tableColumns?.filter((tblCol) => {
          return (
            !auditColumnsKey.includes(tblCol?.id?.toLocaleLowerCase()) &&
            (tblCol?.label?.toLocaleLowerCase().includes(tmpSearchString) ||
              getLabel(tblCol?.id)
                ?.toLocaleLowerCase()
                .includes(tmpSearchString))
          );
        })
      );
    } else {
    }
  }, [searchString]);

  return (
    <>
      <CoreBox styleClasses={[CoreClasses.POPOVER.HEADER]}>
        <CoreTextField
          styleClasses={[CoreClasses.MARGIN.MB0]}
          // label="Find column"
          placeholder="Search column"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <CoreInputAdornment position="end" styleClasses={[]}>
                {searchString && searchString?.length > 0 && (
                  <CoreIconButton
                    title={"Clear Search"}
                    onClick={() => {
                      setSearchString("");
                    }}
                  >
                    <CoreIcon>clear</CoreIcon>
                  </CoreIconButton>
                )}
              </CoreInputAdornment>
            ),
          }}
        />
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        {(searchString &&
        searchString.length > 0 &&
        searchedColumns &&
        searchedColumns?.length > 0
          ? searchedColumns
          : tableColumns?.filter(
            (tblCol) => !auditColumnsKey.includes(tblCol.id)
          )
        )?.map((col) => {
          return (
            !auditColumnsKey.includes(col.id) && (
              <CoreStack
                direction="row"
                styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
              >
                <CoreStack
                  direction="row"
                  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
                >
                  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB0]}>
                    {col?.label || getLabel(col?.id || "Unknown")}&nbsp;
                  </CoreTypographyBody1>

                  {Object.keys(order).includes(col.id) && (
                    <>
                      &nbsp;
                      <CoreIcon
                        icon={
                          order[col.id] === "asc"
                            ? " arrow_drop_up"
                            : "arrow_drop_down"
                        }
                        // type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
                      />
                    </>
                  )}
                </CoreStack>

                <CoreStack
                  direction="row"
                  styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
                >
                  <CoreIconButton
                    onClick={(e) => {
                      onRequestSort(e, col.id, "asc");
                    }}
                  >
                    <CoreIcon
                      icon="fa-sort-amount-up"
                      type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
                    />
                  </CoreIconButton>

                  <CoreIconButton
                    onClick={(e) => {
                      onRequestSort(e, col.id, "desc");
                    }}
                  >
                    <CoreIcon
                      icon="fa-sort-amount-up-alt"
                      type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
                    />
                  </CoreIconButton>
                </CoreStack>
              </CoreStack>
            )
          );
        })}

        <CoreDivider />
      </CoreBox>
    </>
  );
}
