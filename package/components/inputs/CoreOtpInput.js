import React from "react";
import OtpInput from "react-otp-input";
import config from "../../config/config";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";
import CoreFormErrorText  from "./CoreFormErrorText";
import CoreFormHelperText  from "./CoreFormHelperText";

export default function CoreOtpInput (props) {
  console.log("ADSDASDA");
  return (
    <CoreBox styleClasses={[CoreClasses.MARGIN.MB2]}>
      <OtpInput
        containerStyle={{
          // width: "100%"
          display: "flex",
          marginLeft: -10,
          marginRight: -10,
          marginTop: -14,
        }}
        inputStyle={{
          width: "100%",
          margin: 10,
          color: config.color.primaryTextColor,
          border: "none",
          outline: "none",
          borderBottomStyle: "solid",
          borderBottomWidth: "none",
          borderBottomColor: config.color.contrastBackgroundColor,
          fontSize: "2rem",
        }}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={(v) => {
          props.formik.setFieldValue(props.id, v);
        }}
        numInputs={6}
        separator={<span></span>}
        shouldAutoFocus={props.autoFocus ? true : false}
      />
      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}
      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
};
