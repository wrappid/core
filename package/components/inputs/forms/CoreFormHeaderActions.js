// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { getConfigurationObject } from "@wrappid/styles";

import CoreClasses from "../../styles/CoreClasses";
import { APP_PLATFORM } from "../../utils/themeUtil";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreBox from "../layouts/CoreBox";

export default function CoreFormHeaderActions(props) {
  //TODO: add tooltop component to CoreIconButton with label
  // console.log("props", props);
  return props.action ? (
    Array.isArray(props.action) ? (
      <CoreBox
        styleClasses={[CoreClasses?.FLEX?.DIRECTION_ROW, CoreClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_END, CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_START]}>
        {props.action.map((action, i) => (
          <CoreIconButton
            style={
              getConfigurationObject()?.wrappid?.platform === APP_PLATFORM
                ? { marginRight: -10 }
                : {}
            }
            key={"form-action-" + i}
            title={action.title}
            disabled={action.disable}
            onClick={() => {
              action.OnClick(props.id);
            }}>
            <CoreIcon>{action.icon}</CoreIcon>
          </CoreIconButton>
        ))}
      </CoreBox>
    ) : (
      <CoreIconButton
        disabled={props.action.disable}
        title={props.action.title}
        onClick={props.action.OnClick}>
        <CoreIcon>{props.action.icon}</CoreIcon>
      </CoreIconButton>
    )
  ) : null;
}
