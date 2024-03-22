// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CoreEmailLink from "./CoreEmailLink";
import CorePhoneLink from "./CorePhoneLink";
import CoreTypographyBody1 from "./CoreTypographyBody1";
import { toggleModalState } from "../../store/action/modalAction";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreTextButton from "../inputs/CoreTextButton";
import CoreForm from "../inputs/forms/CoreForm";
import { FORM_EDIT_MODE, FORM_IDS } from "../inputs/forms/coreFormConstants";

export default function CoreEmailOrPhoneLink(props) {
  props = sanitizeComponentProps(CoreEmailOrPhoneLink, props);
  const dispatch = useDispatch();
  const { verifyOtpSuccess } = useSelector(
    (state) => state?.settings
  );

  const HandleModalOpen = (data) => {
    let comp = (
      <CoreForm
        initData={{ data: data?.data }}
        initProps={{ otp: { to: data?.data } }}
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
          {
            props?.data?.includes("@")
              ? <CoreEmailLink email={props?.data} verified={props?.verified} />
              : <CorePhoneLink phone={props?.data} verified={props?.verified} />
          }

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

CoreEmailOrPhoneLink.validProps = [...CoreEmailLink.validProps, ...CorePhoneLink.validProps];
CoreEmailOrPhoneLink.invalidProps = [];
