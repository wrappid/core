import React, { useContext } from "react";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../../layouts/CoreBox";
import { CoreApplicationContext } from "../../../config/contextHandler";

export default function CoreAppVersion() {

  const { version } = useContext(CoreApplicationContext);

  return (
    <CoreBox
    // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
    >
      <CoreTypographyCaption>APP Version:</CoreTypographyCaption>

      <CoreTypographyCaption>{version || "unknown"}</CoreTypographyCaption>
    </CoreBox>
  );
}
