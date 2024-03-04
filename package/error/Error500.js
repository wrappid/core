// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation } from "@wrappid/native";

import CoreH6 from "../components/dataDisplay/CoreH6";
import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import BlankLayout from "../components/layouts/_system/BlankLayout";
import CoreLayoutItem from "../layout/CoreLayoutItem";
import CoreClasses from "../styles/CoreClasses";

export default function Error500() {
  const { error = { message: "", stack: "" } } = nativeUseLocation();

  return (
    
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>Error Reported</CoreH6>

        <CoreTypographyBody1>{error?.message}</CoreTypographyBody1>

        <CoreTypographyBody1>{error?.stack}</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
