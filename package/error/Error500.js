// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation } from "@wrappid/styled-components";

import CoreH6 from "../components/dataDisplay/heading/CoreH6";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreCard from "../components/surfaces/CoreCard";
import CoreCardContent from "../components/surfaces/CoreCardContent";
import CoreClasses from "../styles/CoreClasses";

export default function Error500() {
  const { error = { message: "", stack: "" } } = nativeUseLocation();

  return (
    <CoreCard>
      <CoreCardContent>
        <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
          Error Reported
        </CoreH6>

        <CoreTypographyBody1>{error?.message}</CoreTypographyBody1>

        <CoreTypographyBody1>{error?.stack}</CoreTypographyBody1>
      </CoreCardContent>
    </CoreCard>
  );
}
