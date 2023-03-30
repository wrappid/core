import React from "react";
import CoreButton from "../CoreButton";
import CoreIconButton from "./../CoreIconButton";
import { CoreClasses } from "@wrappid/styles";
import CoreIcon from "../../dataDisplay/CoreIcon";
import { isJson } from "../../../utils/stringUtils";

export default function CoreResponsiveButton(props) {
  return (
    <>
      <CoreButton
        {...props}
        styleClasses={[CoreClasses.DISPLAY.NONE, CoreClasses.DISPLAY.SM.BLOCK]}
        variant="outlined"
      />
      <CoreIconButton
        styleClasses={[CoreClasses.DISPLAY.BLOCK, CoreClasses.DISPLAY.SM.NONE]}
        title={props?.label || props?.title}
        onClick={props?.OnClick || props?.onClick}
      >
        <CoreIcon
          options={
            typeof props?.icon === "object"
              ? props?.icon
              : typeof props?.icon === "string" && isJson(props?.icon)
              ? JSON.parse(props?.icon)
              : { icon: props?.icon }
          }
        />
      </CoreIconButton>
    </>
  );
}
