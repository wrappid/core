import React from "react";
import { getLabel } from "../../../../utils/stringUtils";
import { CoreClasses } from "@wrappid/styles";
import CoreDivider from "../../dataDisplay/CoreDivider";
import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreFormControlLabel from "../../forms/CoreFormGroupLabel";
import CoreCheckbox from "../../inputs/CoreCheckbox";
import CoreIconButton from "../../inputs/CoreIconButton";
import CoreInputAdornment from "../../inputs/CoreInputAdornment";
import { CoreTextField } from "../../inputs/CoreTextField";
import CoreBox from "../../layouts/CoreBox";
import CoreStack from "../../layouts/CoreStack";

export default function FilterColumn(props) {
  const {
    tableUUID,
    showAllColumns,
    hideAllColumns,
    tableColumns,
    filteredColumns,
    auditColumnsKey,
    handleColumnFilter,
    showAuditColumns,
    setShowAuditColumns,
  } = props;

  const [searchString, setSearchString] = React.useState(null);
  const [searchedColumns, setSearchedColumns] = React.useState([]);
  const [_selectAllColumn, set_selectAllColumn] = React.useState(true);

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

  React.useEffect(() => {
    if (
      tableColumns.length ===
      auditColumnsKey.length + filteredColumns.length
    ) {
      set_selectAllColumn(true);
    } else {
      set_selectAllColumn(false);
    }
  }, [tableColumns, filteredColumns, auditColumnsKey]);

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
                <CoreIconButton title={"Hide all"} onClick={hideAllColumns}>
                  <CoreIcon>playlist_remove</CoreIcon>
                </CoreIconButton>
                <CoreIconButton title={"Show all"} onClick={showAllColumns}>
                  <CoreIcon>playlist_add_check</CoreIcon>
                </CoreIconButton>
              </CoreInputAdornment>
            ),
          }}
        />
        {/* <CoreStack direction="column">
          <CoreFormControlLabel
            control={
              <CoreCheckbox
                onChange={(e) => {
                  setShowAuditColumns(!showAuditColumns);
                }}
                checked={showAuditColumns}
              />
            }
            label={"Audit Data"}
          />
        </CoreStack> */}
      </CoreBox>
      <CoreBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <CoreStack direction="column">
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
                <CoreFormControlLabel
                  control={
                    <CoreCheckbox
                      onChange={(e) => {
                        handleColumnFilter(e, col);
                      }}
                      checked={filteredColumns.includes(col.id)}
                    />
                  }
                  label={col.label}
                />
              )
            );
          })}
        </CoreStack>
      </CoreBox>
    </>
  );
}
