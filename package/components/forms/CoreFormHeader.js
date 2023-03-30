import React from "react";
import { viewString } from "../../utils/formUtils";
import { CoreClasses } from "@wrappid/styles";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreCardHeader from "../surfaces/CoreCardHeader";
import CoreFormHeaderActions from "./CoreFormHeaderActions";

export default function CoreFormHeader(props) {
  const { heading, subHeading, headerAction, index, action, formId } = props;
  return (!props.mode &&
    headerAction &&
    action !== undefined &&
    action.length > 0) ||
    (heading !== undefined && heading.length > 0) ||
    (subHeading !== undefined && subHeading.length > 0) ? (
    <CoreCardHeader
      styleClasses={[CoreClasses.PADDING.P0, CoreClasses.PADDING.PR1]}
      title={
        <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}>
          {viewString(heading, "heading")}
        </CoreTypographyBody1>
      }
      subheader={
        <CoreTypographyBody1>
          {viewString(subHeading, "sub heading")}
        </CoreTypographyBody1>
      }
      action={
        !props.mode &&
        headerAction && (
          <CoreFormHeaderActions
            id={formId}
            index={index || 0}
            action={action}
          />
        )
      }
    />
  ) : null;
}
