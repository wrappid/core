// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreFormHeaderActions from "./CoreFormHeaderActions";
import CoreClasses from "../../styles/CoreClasses";
import { viewString } from "../../utils/formUtils";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreCardHeader from "../surfaces/CoreCardHeader";

export default function CoreFormHeader(props) {
  const {
    heading, subHeading, headerAction, index, action, formId 
  } = props;

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
