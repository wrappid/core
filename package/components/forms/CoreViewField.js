import React from "react";
import {
  createFormFieldProps,
  createFormGridProps,
} from "../../../utils/formUtils";
import { CoreClasses } from "@wrappid/styles";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";
import CoreGrid from "../layouts/CoreGrid";

export default function CoreViewField(props) {
  const { element, data } = props;
  return React.createElement(
    element?.box?.comp ? element.box.comp : CoreGrid,
    createFormGridProps(element),
    <>
      {React.createElement(CoreLabel, {}, element?.label)}
      {React.createElement(
        element.viewComp ? element.viewComp : CoreBody1,
        createFormFieldProps(element),
        data && data[element.id] ? data[element.id] : "NA"
      )}
    </>
  );
}
