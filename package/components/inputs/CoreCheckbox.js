import React from "react";
import { SCCheckbox } from "@wrappid/styled-components";
import { CoreClasses } from "@wrappid/styles";
import CoreFormControlLabel from "../forms/CoreFormGroupLabel";

export default function CoreCheckbox(props) {
  const {
    id,
    styleClasses = [],
    formik,
    children,
    onChange,
    label,
    value,
  } = props;
  return (
    <>
      {label ? (
        <CoreFormControlLabel
          label={label}
          styleClasses={[CoreClasses.MARGIN.MR0]}
          control={
            <SCCheckbox
              id={id}
              checked={formik ? value : props.checked}
              styleClasses={[...(styleClasses || [])]}
              onChange={
                onChange && !formik
                  ? onChange
                  : (v) => {
                      formik?.setFieldValue(id, v.target.checked);
                    }
              }
            />
          }
        />
      ) : (
        <SCCheckbox
          id={id}
          checked={formik ? value : props.checked}
          styleClasses={[...(styleClasses || [])]}
          onChange={
            onChange && !formik
              ? onChange
              : (v) => {
                  formik?.setFieldValue(id, v.target.checked);
                }
          }
        />
      )}
    </>
  );
}
