// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreCheckbox from "./CoreCheckbox";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreFormControlLabel from "../inputs/forms/CoreFormControlLabel";
import CoreBox from "../layouts/CoreBox";

export default function CoreFormLabelCheckbox(props) {
  // -- console.log("props", props);
  const { error, helperText } = props;
  
  return (
    <CoreBox>
      <CoreFormControlLabel
        id={props.id}
        checked={props?.formik?.values[props?.id]}
        control={
          <CoreCheckbox
            id={props.id}
            checked={props?.formik?.values[props?.id]}
            styleClasses={[...(props?.styleClasses || [])]}
            formik={props?.formik}
          />
        }
        label={props.label}
        labelPlacement={props.labelPlacement}
      />

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
      
      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}
    </CoreBox>
  );
}
