// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeMarkdownViewer } from "@wrappid/native";

export default function CoreMarkdownViewer(props) {
  const { children, ...restProps } = props;

  return <NativeMarkdownViewer {...restProps}>{children}</NativeMarkdownViewer>;
}
