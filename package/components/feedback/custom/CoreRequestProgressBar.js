// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { useSelector } from "react-redux";

import CoreLinearProgress from "../CoreLinearProgress";

export default function CoreRequestProgressBar() {
  const requestProgress = useSelector((state) => state.app.requestProgress);

  return (
    <>
      {requestProgress.visible ? (
        <CoreLinearProgress />
      ) : null}
    </>
  );
}
