import React from "react";
import { NativeMarkdownViewer } from "@wrappid/styled-components";

export default function CoreMarkdownViewer(props) {
  const { children, ...restProps } = props;
  return (
    <NativeMarkdownViewer {...restProps}>{children}</NativeMarkdownViewer>
  )
}