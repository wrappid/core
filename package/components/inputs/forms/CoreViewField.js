// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import {
  createFormFieldProps,
  createFormGridProps
} from "../../../utils/formUtils";
import CoreLabel from "../../dataDisplay/CoreLabel";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreGrid from "../../layouts/CoreGrid";

export default function CoreViewField(props) {
  const { element, data } = props;

  return React.createElement(
    element?.box?.comp ? element.box.comp : CoreGrid,
    createFormGridProps(element),
    <>
      {React.createElement(CoreLabel, {}, element?.label)}

      {React.createElement(
        element.viewComp ? element.viewComp : CoreTypographyBody1,
        createFormFieldProps(element),
        data && data[element.id] ? data[element.id] : "NA"
      )}
    </>
  );
}
