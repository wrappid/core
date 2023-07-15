import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { SENT_OTP_API } from "../../../config/api";
import { HTTP, communicationTypes } from "../../../config/constants";

import { toggleModalState } from "../../../store/action/modalAction";
import {
  OTP_SENT_ERROR,
  OTP_SENT_SUCCESS,
} from "../../../store/types/settingsTypes";
import { apiRequestAction } from "../../../store/action/appActions";
import CoreForm from "../../forms/CoreForm";
import { FORM_EDIT_MODE, FORM_IDS } from "../../forms/coreFormConstants";
import CoreTypographyBody1 from "../paragraph/CoreTypographyBody1";
import CoreLink from "../../navigation/CoreLink";
import CoreIcon from "../CoreIcon";
import CoreTextButton from "../../inputs/CoreTextButton";
import CoreClasses from "../../../styles/CoreClasses";
import { UtilityClasses } from "@wrappid/styles";

export default function CoreEmailOrPhoneLink(props) {
  const dispatch = useDispatch();
  const personId = useSelector((state) => state?.profile?.basic?.id);
  const verifyOtpSuccess = useSelector(
    (state) => state?.settings?.verifyOtpSuccess
  );

  const HandleModalOpen = (data) => {
    let comp = (
      <CoreForm
        initData={{ data: data.data }}
        formId={
          data?.data?.includes("@")
            ? FORM_IDS.__VERIFY_EMAIL_OTP
            : FORM_IDS.__VERIFY_PHONE_OTP
        }
        onMountRead={false}
        mode={FORM_EDIT_MODE}
      />
    );

    dispatch(
      apiRequestAction(
        HTTP.POST,
        SENT_OTP_API,
        true,
        {
          data: props.data,
          type: props?.data?.includes("@")
            ? communicationTypes.MAIL
            : communicationTypes.SMS,
        },
        OTP_SENT_SUCCESS,
        OTP_SENT_ERROR
      )
    );

    dispatch(
      toggleModalState({
        data: {
          comp,
          heading: data?.data?.includes("@") ? "Verify Email" : "Verify Phone",
        },
      })
    );
  };

  useEffect(() => {
    if (verifyOtpSuccess) {
      // Dispatch an action to close the modal
      dispatch(toggleModalState({}));
    }
  }, [verifyOtpSuccess]);

  return (
    <>
      {props.data && (
        <CoreTypographyBody1
          styleClasses={[UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}
          noWrap={true}
        >
          <CoreLink
          // href={`tel:${props.phone}`}
          >
            {props.data}
          </CoreLink>

          {props.verified ? (
            <CoreIcon styleClasses={[CoreClasses?.ICON?.VERIFIED_SUCCESS]}>
              check_circle
            </CoreIcon>
          ) : (
            <CoreIcon styleClasses={[CoreClasses?.ICON?.VERIFIED_WARNING]}>
              error_outline
            </CoreIcon>
          )}

          {!props.verified && (
            <CoreTextButton
              label="Verify"
              OnClick={() => HandleModalOpen(props)}
            />
          )}
        </CoreTypographyBody1>
      )}
    </>
  );
}
