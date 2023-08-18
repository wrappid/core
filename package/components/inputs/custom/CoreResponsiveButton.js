// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIconButton from "./../CoreIconButton";
import CoreClasses from "../../../styles/CoreClasses";
import { isJson } from "../../../utils/stringUtils";
import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreButton from "../CoreButton";

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
