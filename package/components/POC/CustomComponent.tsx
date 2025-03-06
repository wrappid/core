import React from "react";
import TestComponent from "./TestComponent";
import CoreDivider from "./CoreDivider";

export function CustomComponent() {
  return (
    <>
      <TestComponent
        height={15}
        onClick={() => {
          console.log("TestComponent onClick");
        }}
        test="15"
      />
    </>
  );
}
