import React from "react";
import CoreBox from "../layouts/CoreBox";

export default function CoreTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <CoreBox
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </CoreBox>
  );
}
