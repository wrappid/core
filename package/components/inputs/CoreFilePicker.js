import React from "react";

import { useRef } from "react";
import { SCInput } from "@wrappid/styled-components";
import { CoreClasses } from "@wrappid/styles";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";

export default function CoreFilePicker(props) {
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    console.log("adasd");
    inputRef.current.click();
  };
  return (
    <CoreFormControl>
      <CoreLabel
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        htmlFor={props.id}
      >
        {props.label}
      </CoreLabel>
      <SCInput
        id={props.id}
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        inputProps={{
          readOnly: true,
        }}
        label={props.label}
        variant="standard"
        // value={props.value}
        onChange={(event) => {
          console.log("FIle Change", event.target.files[0], props.formik);
          props.formik.setFieldValue(props.id, event.target.files[0]);
        }}
        required={props.formik ? false : props.required}
        placeholder={props.placeholder}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        readOnly={props.readOnly}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
      />
      {!props.readOnly && (
        <CoreBox
          type="file"
          onClick={handleFileOpen}
          // onMouseDown={handleFileOpen}
          edge="end"
          styleClasses={[CoreClasses.LAYOUT.BORDER_BOTTOM_WIDTH]}
        >
          <CoreGrid>
            <CoreTypographyBody1 gridSize={10}>
              {props.value ? props?.value?.name : "Upload file"}
            </CoreTypographyBody1>
            <CoreTypographyBody1
              gridSize={2}
              styleClasses={[CoreClasses.LAYOUT.RIGHT_ALIGN]}
            >
              <CoreIcon type="file">upload</CoreIcon>
            </CoreTypographyBody1>
          </CoreGrid>
        </CoreBox>
      )}
      {/* <CoreIconButton
        aria-label="toggle password visibility"
        type="file"
        onClick={handleFileOpen}
        // onMouseDown={handleFileOpen}
        edge="end"
      >
        <CoreIcon type="file">upload</CoreIcon>
      </CoreIconButton> */}

      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreFormControl>
  );
}
