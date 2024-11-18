// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { useSelector } from "react-redux";

import { CoreApplicationContext } from "../../config/contextHandler";
import CoreClasses from "../../styles/CoreClasses";
import CoreTypographyCaption from "../dataDisplay/CoreTypographyCaption";
import CoreLink from "../navigation/CoreLink";

export default function CoreAppVersion(props) {
  const { noTitle = false } = props;
  const { version } = React.useContext(CoreApplicationContext);
  
  const { accessToken } = useSelector(state => state.auth);
  let authenticated = accessToken ? true : false;

  return (
    <CoreLink
      styleClasses={authenticated ? [] : [CoreClasses.COLOR.TEXT_WHITE]}
      href={"/about"}
    >
      <CoreTypographyCaption>{!noTitle && "Application Version: "}{`v${version || "unknown"}`}</CoreTypographyCaption>
    </CoreLink>
  );
}
