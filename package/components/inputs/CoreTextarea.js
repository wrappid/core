import React from "react";
import CoreInput from "./CoreInput";

export default function CoreTextarea (props) {
  return (
    <CoreInput
      {...props}
      multiline={true}
      minRows={3}
      maxRows={6}
      inputProps={{
        style: {
          resize: "vertical",
        },
      }}
    />
  );
};
