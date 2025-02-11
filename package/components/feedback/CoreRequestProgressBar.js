// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { useSelector } from "react-redux";

import CoreLinearProgress from "./CoreLinearProgress";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";
export default function CoreRequestProgressBar() {
  const COLOR_PRIMARY = "primary";
  const { requestProgress } = useSelector((state) => state?.app);

  return (
    <CoreBox
      styleClasses={[CoreClasses.REQUEST_PROGRESS_BAR]}
    >
      <CoreLinearProgress color={COLOR_PRIMARY} styleClasses={requestProgress.visible ? [] : [CoreClasses.DISPLAY.NONE]} />
    </CoreBox>
  );
}
