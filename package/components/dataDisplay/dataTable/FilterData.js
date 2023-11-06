// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../../styles/CoreClasses";
import { getUUID } from "../../../utils/appUtils";
import CoreIconButton from "../../inputs/CoreIconButton";
import CoreSelect from "../../inputs/CoreSelect";
import CoreTextButton from "../../inputs/CoreTextButton";
import CoreTextField from "../../inputs/CoreTextField";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";
import CoreIcon from "../CoreIcon";

export default function FilterData(props) {
  const { tableUUID, columns } = props;

  const _filterOB = {
    column  : "",
    id      : getUUID(),
    operator: "",
    value   : "",
  };

  const [_filterDatas, set_filterDatas] = React.useState([_filterOB]);

  // eslint-disable-next-line no-unused-vars
  const handleColumnChange = (event, _filterID) => {
    // -- setColumn(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleOperatorChange = (event, _filterID) => {
    // -- setOperator(event.target.value);
  };

  return (
    <CoreBox sx={{ minWidth: "40vw" }} styleClasses={[CoreClasses.PADDING.P2]}>
      {_filterDatas.map((_filterData) => {
        return (
          <>
            <CoreGrid styleClasses={[CoreClasses.LAYOUT.VERTICAL_CENTER]}>
              <CoreIconButton
                gridProps={{ gridSize: 1 }}
                onClick={() => {
                  if (_filterDatas.length > 1) {
                    let _temp = _filterDatas.filter((_fd) => {
                      return _fd.id !== _filterData.id;
                    });

                    set_filterDatas(_temp);
                  }
                }}
              >
                <CoreIcon fontSize="medium" color="primary">
                  highlight_off
                </CoreIcon>
              </CoreIconButton>

              <CoreSelect
                selectID={`column-select-${tableUUID}`}
                gridProps={{ gridSize: 4 }}
                label="Select Column"
                value={_filterData?.columm || ""}
                handleChange={(err) => {
                  handleColumnChange(err, _filterData.id);
                }}
                options={columns}
              />

              <CoreSelect
                selectID={`op-select-${tableUUID}`}
                gridProps={{ gridSize: 3 }}
                label="Select Operator"
                value={_filterData?.columm || ""}
                handleChange={(err) => {
                  handleOperatorChange(err, _filterData.id);
                }}
                options={columns}
              />

              <CoreTextField
                gridProps={{ gridSize: 4 }}
                label={"Value"}
                value={_filterData?.value || ""}
              />
            </CoreGrid>
          </>
        );
      })}

      <CoreBox
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.PADDING.PT2]}
      >
        <CoreTextButton
          label={
            <>
              <CoreIcon>add</CoreIcon>&nbsp;Add Filter
            </>
          }
          OnClick={() => {
            set_filterDatas([..._filterDatas, _filterOB]);
          }}
        />

        <CoreTextButton
          label={
            <>
              <CoreIcon>sync</CoreIcon>&nbsp;Apply
            </>
          }
        />
      </CoreBox>
    </CoreBox>
  );
}
