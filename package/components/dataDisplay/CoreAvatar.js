// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeAvatar } from "@wrappid/native";

import defaultImage from "../../assets/no_image.png";

export default function CoreAvatar(props) {
  let src = props.src && props.src?.length > 0 ? props.src : defaultImage;

  return <NativeAvatar {...props} src={src}/>;
}
