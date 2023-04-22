import { NativeThemeProvider } from "@wrappid/styled-components";
import React from "react";

export default function CoreThemeProvider(props) {
  /**
   * @todo should be able to handle ap and web
   */
  return (
    <NativeThemeProvider theme={props.theme || {}}>
      {props.children}
    </NativeThemeProvider>
  );
}
