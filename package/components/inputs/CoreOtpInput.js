// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeOtpInput } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import { SENT_OTP_API } from "../../config/api";
import { HTTP } from "../../config/constants";
import { apiRequestAction } from "../../store/action/appActions";
import { SEND_OTP_ERROR, SEND_OTP_LOADING, SEND_OTP_SUCCESS } from "../../store/types/appTypes";
import CoreClasses from "../../styles/CoreClasses";
import CoreTimer from "../dataDisplay/CoreTimer";
import CoreSkeleton from "../feedback/CoreSkeleton";
import CoreBox from "../layouts/CoreBox";

export default function CoreOtpInput(props) {
  const dispatch = useDispatch();
  const { sendOtpLoading } = useSelector((state) => state?.app);
  let { config: appConfig } = React.useContext(WrappidDataContext);

  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = () => {
    if (props.to) {
      if (props.sendOtp !== false) {
        let data = { data: props.to, service: props.editId };

        dispatch(
          apiRequestAction(
            HTTP.POST,
            SENT_OTP_API,
            true,
            data,
            SEND_OTP_SUCCESS,
            SEND_OTP_ERROR,
            null, //localAction,
            null, //includeFile,
            null, //file,
            null, //formId,
            null, //reload,
            null, //reduxData,
            null, //pushSnack,
            SEND_OTP_LOADING, //loadingType,
            null //resetLoadingType,
          )
        );
      } else {
        // -- console.log("Not sending otp");
      }
    } else {
      // -- console.log("Can not send OTP 'to' props not found");
    }
  };

  return sendOtpLoading ? (
    <CoreSkeleton variant="rectangular" />
  ) : (
    <CoreBox>
      <NativeOtpInput {...props} />

      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}

      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>

      <CoreTimer
        action={sendOtp}
        actionLabel="Resend OTP"
        seconds={appConfig?.wrappid?.resendOTPTiming || 30}
        timerLabel={"Resend after: "}
      />
    </CoreBox>
  );
}
