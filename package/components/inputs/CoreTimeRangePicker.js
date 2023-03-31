import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import CoreTextField from "./CoreTextField";
import CoreFormHelperText from "./CoreFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { SCTimePicker } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";
import CoreGrid from "../layouts/CoreGrid";
import moment from "moment";

export default function CoreTimeRangePicker(props) {
  const { id, label, onChange, value, formik } = props;
  var spValue = {
    startTime:
      value && value.startTime
        ? typeof value.startTime === "string" && value.startTime.includes(":")
          ? moment().set({
              hour: value.startTime.split(":")[0],
              minute: value.startTime.split(":")[1],
            })
          : value.startTime
        : "",
    endTime:
      value && value.endTime
        ? typeof value.endTime === "string" && value.endTime.includes(":")
          ? moment().set({
              hour: value.endTime.split(":")[0],
              minute: value.endTime.split(":")[1],
            })
          : value.endTime
        : "",
  };

  // console.log("END VALUE", id, spValue, value);

  return (
    <CoreBox>
      <CoreLabel>{label}</CoreLabel>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CoreGrid>
          <SCTimePicker
            gridProps={{
              gridSize: {
                xs: 12,
                sm: 6,
              },
            }}
            label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
            inputFormat="hh:mm"
            value={spValue?.startTime}
            onChange={(v) => {
              formik.setFieldValue(props.id, {
                ...value,
                startTime: moment(v).format("hh:mm"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0
                ? true
                : false
            }
            renderInput={(params) => (
              <CoreTextField
                helperText={
                  props.touched && props.error && props.error.length > 0
                    ? props.error
                    : ""
                }
                {...params}
              />
            )}
          />
          <SCTimePicker
            gridProps={{
              gridSize: {
                xs: 12,
                sm: 6,
              },
            }}
            label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
            inputFormat="hh:mm"
            value={spValue?.endTime}
            onChange={(v) => {
              formik.setFieldValue(props.id, {
                ...value,
                endTime: moment(v).format("hh:mm"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0
                ? true
                : false
            }
            renderInput={(params) => (
              <CoreTextField
                error={props.touched && props.error}
                helperText={
                  props.touched && props.error && props.error.length > 0
                    ? props.error
                    : ""
                }
                {...params}
              />
            )}
          />
        </CoreGrid>
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </CoreFormHelperText>
      </LocalizationProvider>
    </CoreBox>
  );
}
