import React from "react";
import CoreCard from "../components/surfaces/CoreCard";
import CoreCardContent from "../components/surfaces/CoreCardContent";
import CoreH6 from "../components/dataDisplay/heading/CoreH6";
import { CoreClasses } from "@wrappid/styles";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import { nativeUseLocation } from "@wrappid/styled-components";

export default function Error500(props) {
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
