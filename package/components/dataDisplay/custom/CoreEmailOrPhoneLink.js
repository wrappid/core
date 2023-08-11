// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { UtilityClasses } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { SENT_OTP_API } from "../../../config/api";
import { HTTP, communicationTypes } from "../../../config/constants";
import { apiRequestAction } from "../../../store/action/appActions";
import { toggleModalState } from "../../../store/action/modalAction";
import {
  OTP_SENT_ERROR,
  OTP_SENT_SUCCESS
} from "../../../store/types/settingsTypes";
import CoreClasses from "../../../styles/CoreClasses";
import CoreForm from "../../forms/CoreForm";
import { FORM_EDIT_MODE, FORM_IDS } from "../../forms/coreFormConstants";
import CoreTextButton from "../../inputs/CoreTextButton";
import CoreLink from "../../navigation/CoreLink";
import CoreIcon from "../CoreIcon";
import CoreTypographyBody1 from "../paragraph/CoreTypographyBody1";

export default function CoreEmailOrPhoneLink(props) {
  const dispatch = useDispatch();
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

  React.useEffect(() => {
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
              verified
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
