import React from "react";
import CoreLinearProgress from "./CoreLinearProgress";
import { useSelector } from "react-redux";

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
