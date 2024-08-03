// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeJSONEditor } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { ThemeContext } from "@wrappid/styles";

export default function CoreJsonEditor(props) {
  const theme = useContext(ThemeContext);

  return <NativeJSONEditor {...props} theme={theme} />;
}
