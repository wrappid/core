
import React from "react";
import { NativeAvatar } from "@wrappid/styled-components";

export default function CoreAvatar(props) {
  return <NativeAvatar src={props.src || "../../assets/no_image.jpg"} {...props} />;
}

