import React from "react";
import { SCDatePicker } from "@wrappid/styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import CoreTextField from "./CoreTextField";
import CoreFormHelperText from "./CoreFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import moment from "moment";

export default function CoreDateRangepicker(props) {
  const { id, label, onChange, value, formik } = props;
  var spValue = {
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string" && value.startDate.includes(":")
          ? moment(value.startDate)
          : value.startDate
        : "",
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string" && value.endDate.includes(":")
          ? moment(value.endDate)
          : value.endDate
        : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDatePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY"
        value={spValue?.startDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            startDate: moment(v).format("YYYY-MM-DD"),
          });
        }}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
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
      <SCDatePicker
        label={label}
        inputFormat="DD/MM/YYYY"
        value={spValue?.endDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            endDate: moment(v).format("YYYY-MM-DD"),
          });
        }}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
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
      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </LocalizationProvider>
  );
}
