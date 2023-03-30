import React from "react";
import CoreCard from "../components/surfaces/CoreCard";
import CoreCardContent from "../components/surfaces/CoreCardContent";
import CoreH6 from "../components/dataDisplay/heading/CoreH6";
import { CoreClasses } from "@wrappid/styles";
import CoreTypographyBody1 from "../components/dataDisplay/paragraph/CoreTypographyBody1";
import { useLocation } from "react-router-dom";

export default function Error500(props) {
  const { error = { message: "", stack: "" } } = useLocation();
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
