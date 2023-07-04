import React from "react";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreBox from "../layouts/CoreBox";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";
import CoreGrid from "../layouts/CoreGrid";
import moment from "moment";
import CoreIconButton from "./CoreIconButton";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTimePicker from "./CoreTimePicker";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreMultiTimeRangePicker(props) {
  const { id, label, onChange, value, formik, ampm } = props;
  const [timeRanges, setTimeRanges] = React.useState([
    {
      startTime: null,
      endTime: null,
    },
  ]);

  // console.log("Timeranges", timeRanges, value);

  React.useEffect(() => {
    if (value && Array.isArray(value)) {
      setTimeRanges(value);
    }
  }, []);

  const addRange = () => {
    var x = [...timeRanges];
    x.push({
      startTime: null,
      endTime: null,
    });
    console.log();
    setTimeRanges(x);
  };

  const deleteRange = (i) => {
    var x = [...timeRanges];
    let y = x.slice(0, i).concat(x.slice(i + 1));
    setTimeRanges(y);
  };

  const _handleChange = (i, v, type) => {
    var x = [...timeRanges];
    x[i][type] = v.format("LLL");
    formik.setFieldValue(props.id, x);
  };

  // console.log("END VALUE", id, spValue, value);

  return (
    <CoreBox>
      <CoreLabel>{label}</CoreLabel>
      {timeRanges.map((timeRange, i) => (
        <CoreGrid styleClasses={[CoreClasses.MARGIN.MT1]}>
          <CoreTimePicker
            readOnly={props.readOnly}
            gridProps={{
              gridSize: 5,
            }}
            label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
            inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
            ampm={props.ampm ? true : false}
            value={timeRange.startTime ? moment(timeRange.startTime) : null}
            onChange={(v) => {
              _handleChange(i, v, "startTime");
            }}
            touched={props.touched}
            error={props.error}
          />
          <CoreTimePicker
            readOnly={props.readOnly}
            gridProps={{
              gridSize: 5,
            }}
            label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
            inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
            ampm={props.ampm ? true : false}
            value={timeRange.endTime ? moment(timeRange.endTime) : null}
            onChange={(v) => {
              _handleChange(i, v, "endTime");
            }}
            touched={props.touched}
            error={props.error}
          />
          {i < 1 ? (
            <CoreIconButton
              gridProps={{
                gridSize: 2,
              }}
              onClick={addRange}
            >
              <CoreIcon>add</CoreIcon>
            </CoreIconButton>
          ) : (
            <CoreIconButton
              gridProps={{
                gridSize: 2,
              }}
              onClick={() => {
                deleteRange(i);
              }}
            >
              <CoreIcon>delete_outline</CoreIcon>
            </CoreIconButton>
          )}
        </CoreGrid>
      ))}
      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
}
