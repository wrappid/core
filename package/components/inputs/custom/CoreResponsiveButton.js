// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { getConfigurationObject } from "@wrappid/styles";

import CoreIconButton from "./../CoreIconButton";
import CoreClasses from "../../../styles/CoreClasses";
import { isJson } from "../../../utils/stringUtils";
import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreOutlinedButton from "../CoreOutlinedButton";

export default function CoreResponsiveButton(props) {
  let config = getConfigurationObject();

  return (
    <>
      <CoreOutlinedButton
        {...props}
        styleClasses={[CoreClasses.DISPLAY.NONE, CoreClasses.DISPLAY.SM.BLOCK]}
      />

      {config?.wrappid?.platform !== "mobile" && (
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
      )}
    </>
  );
}
