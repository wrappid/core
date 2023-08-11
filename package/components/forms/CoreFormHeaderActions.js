// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIcon from "../dataDisplay/CoreIcon";
import CoreIconButton from "../inputs/CoreIconButton";

export default function CoreFormHeaderActions(props) {
  //TODO: add tooltop component to CoreIconButton with label
  // console.log("props", props);
  return props.action ? (
    Array.isArray(props.action) ? (
      props.action.map((ac) => (
        <CoreIconButton
          title={ac.title}
          disabled={ac.disable}
          onClick={() => {
            console.log("EDIT CLICK", props.id);
            ac.OnClick(props.id);
          }}
        >
          <CoreIcon>{ac.icon}</CoreIcon>
        </CoreIconButton>
      ))
    ) : (
      <CoreIconButton
        disabled={props.action.disable}
        title={props.action.title}
        onClick={props.action.OnClick}
      >
        <CoreIcon>{props.action.icon}</CoreIcon>
      </CoreIconButton>
    )
  ) : null;
}
