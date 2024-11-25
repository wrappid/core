/* eslint-disable id-length */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreIconButton from "./CoreIconButton";
import CoreTimePicker from "./CoreTimePicker";
import CoreClasses from "../../styles/CoreClasses";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreLabel from "../dataDisplay/CoreLabel";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";

export default function CoreMultiTimeRangePicker(props) {
  const {
    // eslint-disable-next-line no-unused-vars
    error, helperText, label, value, formik, ...restProps
  } = props;
  const [timeRanges, setTimeRanges] = React.useState([
    {
      endTime  : null,
      startTime: null,
    }
  ]);

  // -- console.log("Timeranges", timeRanges, value);

  React.useEffect(() => {
    if (value && Array.isArray(value)) {
      setTimeRanges(value);
    }
  }, []);

  const addRange = () => {
    let x = [...timeRanges];

    x.push({
      endTime  : null,
      startTime: null,
    });
    setTimeRanges(x);
  };

  const deleteRange = (i) => {
    let x = [...timeRanges];
    let y = x.slice(0, i).concat(x.slice(i + 1));

    setTimeRanges(y);
  };

  const _handleChange = (i, v, type) => {
    let x = [...timeRanges];

    x[i][type] = v;
    formik.setFieldValue(props.id, x);
  };

  return (
    <CoreBox>
      <CoreLabel>{label}</CoreLabel>

      {timeRanges.map((timeRange, index) => (
        <CoreGrid key={`timeRange-${index}`}>
          <CoreGrid gridProps={{ gridSize: 11 }}>
            <CoreTimePicker
              readOnly={props.readOnly}
              gridProps={{ gridSize: 6 }}
              label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
              inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
              ampm={props.ampm ? true : false}
              value={timeRange.startTime ? timeRange.startTime : null}
              onChange={(v) => {
                _handleChange(index, v, "startTime");
              }}
            />

            <CoreTimePicker
              readOnly={props.readOnly}
              gridProps={{ gridSize: 6 }}
              label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
              inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
              ampm={props.ampm ? true : false}
              value={timeRange.endTime ? timeRange.endTime : null}
              onChange={(v) => {
                _handleChange(index, v, "endTime");
              }}
            />
          </CoreGrid>

          <CoreBox gridProps={{ gridSize: 1, styleClasses: [CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] }} >
            {index < 1 ? (
              <CoreIconButton
                onClick={addRange}
              >
                <CoreIcon>add</CoreIcon>
              </CoreIconButton>
            ) : (
              <CoreIconButton
                onClick={() => {
                  deleteRange(index);
                }}
              >
                <CoreIcon>delete_outline</CoreIcon>
              </CoreIconButton>
            )}
          </CoreBox>
        </CoreGrid>
      ))}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
      
      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}
    </CoreBox>
  );
}