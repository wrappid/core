// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { useSelector } from "react-redux";

import CoreLinearProgress from "./CoreLinearProgress";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreBox from "../layouts/CoreBox";
export default function CoreRequestProgressBar(props) {
  const COLOR_PRIMARY = "primary";
  const { requestProgress } = useSelector((state) => state?.app);

  props = sanitizeComponentProps(CoreRequestProgressBar, props);

  return (
    <CoreBox {...props}>
      <CoreLinearProgress color={COLOR_PRIMARY} styleClasses={requestProgress.visible ? [] : [CoreClasses.DISPLAY.NONE]} />
    </CoreBox>
  );
}
CoreRequestProgressBar.validProps = [];
CoreRequestProgressBar.invalidProps = [];
