import React from "react";
import { SCDatePicker } from "@wrappid/styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import CoreTextField from "./CoreTextField";
import CoreFormHelperText from "./CoreFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import CoreFormErrorText from "./CoreFormErrorText";

export default function CoreDatePicker(props) {
  const { label, onChange, value, formik } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDatePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY"
        value={value === "" ? null : value}
        onChange={(v) => {
          formik.setFieldValue(props.id, v ? v?.format("YYYY-MM-DD") : null);
        }}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        renderInput={(params) => (
          <CoreTextField
            // helperText={props.touched && props.error && props.error.length > 0 ? props.error : ""}
            {...params}
          />
        )}
      />
      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </LocalizationProvider>
  );
}
