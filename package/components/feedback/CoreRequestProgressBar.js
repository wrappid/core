import React from "react";
import CoreLinearProgress from "./CoreLinearProgress";
import { useSelector } from "react-redux";

export default function CoreRequestProgressBar() {
  const requestProgress = useSelector((state) => state.app.requestProgress);

  console.log("visible value: ", requestProgress.visible);
  return (
    <>
      {requestProgress.visible ? (
        <CoreLinearProgress indeterminate={true} color={"red"} />
      ) : null}
    </>
  );
}
