import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import CoreTextField from "./CoreTextField";
import CoreFormHelperText from "./CoreFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";
import moment from "moment";

export default function CoreDateTimeRangePicker(props) {
  const { label, onChange, value, formik } = props;
  var spValue = {
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string"
          ? moment(value.startDate)
          : value.startDate
        : "",
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string"
          ? moment(value.endDate)
          : value.endDate
        : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm"
        value={spValue?.startDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            startDate: moment(v).format("YYYY-MM-DD hh:mm"),
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
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm"
        value={spValue?.endDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            endDate: moment(v).format("YYYY-MM-DD hh:mm"),
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
