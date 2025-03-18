import React from "react";
import TestComponent from "./TestComponent";

export default function TestFile() {
  return (
    <TestComponent
      height={200}
      width={300}
      styleClasses="my-custom-class"
      test="Hello World!"
      onClick={() => alert("Clicked!")}
      onMouseEnter={() => console.log("Mouse Entered")}
      //   hola={45}
    >
      <div></div>
    </TestComponent>
  );
}
