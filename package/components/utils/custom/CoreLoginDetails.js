import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import CoreLabel from "../../dataDisplay/paragraph/CoreLabel";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../../layouts/CoreBox";
import CoreClasses from "../../../styles/CoreClasses";

export default function CoreLoginDetails() {
  const role = useSelector((state) => state.auth?.role);
  const clientLoginInformation = useSelector(
    (state) => state.auth?.clientLoginInformation
  );
  const { currentLog } = clientLoginInformation || {};
  const { extraInfo } = currentLog || {};

  return (
    <>
      <CoreBox
        // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
      >
        <CoreTypographyCaption>Role:</CoreTypographyCaption>

        <CoreTypographyCaption>{role?.role}</CoreTypographyCaption>
      </CoreBox>

      <CoreBox
        // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
      >
        <CoreLabel>Last Login Information :-</CoreLabel>
      </CoreBox>

      <CoreBox
        // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
      >
        <CoreTypographyCaption>Device:</CoreTypographyCaption>

        <CoreTypographyCaption>
          {extraInfo?.isMobile ? "Mobile" : extraInfo?.browser}
        </CoreTypographyCaption>
      </CoreBox>

      <CoreBox
        // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
      >
        <CoreTypographyCaption>Last Login time:</CoreTypographyCaption>

        <CoreTypographyCaption>
          {currentLog?.createdAt &&
            moment(currentLog?.createdAt).format("YYYY-MM-DD, hh:mm:ss")}
        </CoreTypographyCaption>
      </CoreBox>

      <CoreBox
        // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
      >
        <CoreTypographyCaption>Location IP:</CoreTypographyCaption>

        <CoreTypographyCaption>Unknown</CoreTypographyCaption>
      </CoreBox>
    </>
  );
}
