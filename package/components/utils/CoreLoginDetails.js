// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useEffect } from "react";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../../config/constants";
import { apiRequestAction } from "../../store/action/appActions";
import {
  CLIENT_INFORMATION_FETCH_ERROR,
  CLIENT_INFORMATION_FETCH_SUCCESS
} from "../../store/types/authTypes";
import CoreClasses from "../../styles/CoreClasses";
import { getDeviceDetails } from "../../utils/device.utils";
import CoreLabel from "../dataDisplay/CoreLabel";
import CoreTypographyCaption from "../dataDisplay/CoreTypographyCaption";
import CoreTypographySubtitle2 from "../dataDisplay/CoreTypographySubtitle2";
import CoreBox from "../layouts/CoreBox";
import CoreAccordion from "../surfaces/CoreAccordion";
import CoreAccordionDetail from "../surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "../surfaces/CoreAccordionSummary";

export default function CoreLoginDetails() {
  const role = useSelector((state) => state.auth?.role);
  const dispatch = useDispatch();
  const clientLoginInformation = useSelector(
    (state) => state?.auth?.clientLoginInformation
  );
  const { lastLoginDetails, ip, deviceInfo } = clientLoginInformation || {};

  const deviceDetails = getDeviceDetails();

  useEffect(() => {
    GetClientLoginInformation();
  }, []);

  const GetClientLoginInformation = () => {
    dispatch(
      apiRequestAction(
        HTTP.GET,
        "/clientLoginInformation",
        true,
        null,
        CLIENT_INFORMATION_FETCH_SUCCESS,
        CLIENT_INFORMATION_FETCH_ERROR
      )
    );
  };

  return (
    <>
      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographySubtitle2>Login Information</CoreTypographySubtitle2>
        </CoreAccordionSummary>

        <CoreAccordionDetail>
          <CoreBox
            styleClasses={[CoreClasses.PADDING.PL1]}
            // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          >
            <CoreTypographyCaption>Role:</CoreTypographyCaption>

            <CoreTypographyCaption>{role?.role}</CoreTypographyCaption>
          </CoreBox>

          <CoreBox
            styleClasses={[CoreClasses.PADDING.PL1]}
            // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          >
            <CoreLabel>Login Information :-</CoreLabel>
          </CoreBox>

          <CoreBox
            styleClasses={[CoreClasses.PADDING.PL1]}
            // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          >
            <CoreTypographyCaption>Device:</CoreTypographyCaption>

            <CoreTypographyCaption>{deviceInfo?.id || deviceDetails.brand + deviceDetails.model}</CoreTypographyCaption>
          </CoreBox>

          <CoreBox
            styleClasses={[CoreClasses.PADDING.PL1]}
            // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          >
            <CoreTypographyCaption>Last Login time:</CoreTypographyCaption>

            <CoreTypographyCaption>
              {lastLoginDetails?.createdAt &&
                moment(lastLoginDetails?.createdAt).format("YYYY-MM-DD, hh:mm:ss")}
            </CoreTypographyCaption>
          </CoreBox>

          <CoreBox
            styleClasses={[CoreClasses.PADDING.PL1]}
            // styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          >
            <CoreTypographyCaption>Location IP:</CoreTypographyCaption>

            <CoreTypographyCaption>{ip}</CoreTypographyCaption>
          </CoreBox>
        </CoreAccordionDetail>
      </CoreAccordion>
    </>
  );
}
