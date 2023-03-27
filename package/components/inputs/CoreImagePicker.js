import React from "react";
import { useRef } from "react";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import CoreClasses from "../../styles/CoreClasses";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreBadge from "../dataDisplay/CoreBadge";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreBox from "../layouts/CoreBox";
import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";

export default function CoreImagePicker  (props) {
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    console.log("adasd");
    inputRef.current.click();
  };
  return (
    <CoreFormControl>
      <SCInput
        id={props.id}
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        inputProps={{
          readOnly: true,
          accept: "image/*",
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
      {/* {!props.readOnly && ( */}

      {/* )} */}
      {!props.readOnly ? (
        <CoreBox
          styleClasses={[
            CoreClasses.NAVIGATION.LINK_STYLE,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          ]}
          aria-label="toggle password visibility"
          type="file"
          onClick={handleFileOpen}
          // onMouseDown={handleFileOpen}
          edge="end"
        >
          <CoreBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<CoreIcon>photo_camera</CoreIcon>}
          >
            <CoreAvatar
              type="file"
              styleClasses={props.styleClasses}
              src={
                props.value
                  ? typeof props.value === "string"
                    ? props.value
                    : URL.createObjectURL(props.value)
                  : "no_image.png"
              }
            />
          </CoreBadge>
        </CoreBox>
      ) : (
        <CoreAvatar
          type="file"
          styleClasses={props.styleClasses}
          src={
            props.value
              ? typeof props.value === "string"
                ? props.value
                : URL.createObjectURL(props.value)
              : "no_image.png"
          }
        />
      )}

      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreFormControl>
  );
};
