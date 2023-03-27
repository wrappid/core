import React from "react";
import { getUUID } from "../../utils/appUtils";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreInputLabel from "./CoreInputLabel";

export default function CoreInput (props) {
  const { coreId = getUUID() } = props;
  return (
    <CoreFormControl coreId={`core-formControl-${coreId}`}>
      <CoreInputLabel
        shrink={true}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        htmlFor={props.id}
      >
        {props.label}
      </CoreInputLabel>
      <SCInput
        id={props.id}
        type={props.showPassword || !props.type ? "text" : props.type}
        label={props.label}
        styleClasses={[...(props.styleClasses || [])]}
        variant="standard"
        value={props.value || ""}
        onChange={props.onChange}
        required={props.formik ? false : props.required}
        placeholder={props.placeholder}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        readOnly={props.readOnly}
        onBlur={props?.formik?.handleBlur}
        inputProps={props.inputProps ? props.inputProps : {}}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        endAdornment={props.endAdornment ? props.endAdornment : null}
        multiline={props.multiline ? props.multiline : false}
        rows={props.rows}
        maxRows={props.maxRows}
        minRows={props.minRows}
        onFocus={
          props.onFormFocus && props.editId && props.readOnly
            ? () => {
                console.log("CLICKED");
                props.onFormFocus(props.editId);
              }
            : () => {
                console.log("CLICKED else");
              }
        }
      />
      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreFormControl>
  );
};
