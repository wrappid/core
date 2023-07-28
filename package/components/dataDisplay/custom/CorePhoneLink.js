import React from "react";
import CoreIcon, { __IconTypes } from "..//CoreIcon";
import CoreTooltip from "../CoreTooltip";
import CoreTypographyBody2 from "../paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";
import CoreStack from "../../layouts/CoreStack";
import CoreLink from "../../navigation/CoreLink";
import { maskEmailOrPhone } from "../../../utils/stringUtils";
import { UtilityClasses } from "@wrappid/styles";
import CoreClasses from "../../../styles/CoreClasses";

export default function CorePhoneLink(props) {
  const {
    limitChars = 30,
    phone,
    verified,
    tooltipPlacement = "bottom",
    size = "medium",
    mask = false,
  } = props;

  const renderPhoneLinkComp = () => {
    return (
      <>
        {phone ? (
          <CoreStack direction={"row"} spacing={1}>
            <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>call</CoreIcon>
            <CoreLink href={`tel:${phone}`}>
              {size === "small" ? (
                <CoreTypographyCaption
                  hideSeeMore={true}
                  limitChars={limitChars}
                  mask={mask}
                >
                  {mask ? maskEmailOrPhone(phone) : phone}
                </CoreTypographyCaption>
              ) : (
                <CoreTypographyBody2
                  styleClasses={[UtilityClasses.LINK.PHONE_EMAIL_LINK]}
                  hideSeeMore={true}
                  limitChars={limitChars}
                  mask={mask}
                >
                  {mask ? maskEmailOrPhone(phone) : phone}
                </CoreTypographyBody2>
              )}
            </CoreLink>

            {phone && verified !== undefined && (
              <CoreIcon
                styleClasses={
                  verified
                    ? [CoreClasses?.ICON?.VERIFIED_SUCCESS]
                    : [CoreClasses?.ICON?.VERIFIED_WARNING]
                }
              >
                {verified ? "verified" : "error_outline"}
              </CoreIcon>
            )}
          </CoreStack>
        ) : (
          <>
            {size === "small" ? (
              <CoreTypographyCaption hideSeeMore={true} limitChars={limitChars}>
                {"Not Available"}
              </CoreTypographyCaption>
            ) : (
              <CoreTypographyBody2 hideSeeMore={true} limitChars={limitChars}>
                {"Not Available"}
              </CoreTypographyBody2>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <>
      {phone && phone.length > limitChars ? (
        <CoreTooltip title={phone} arrow placement={tooltipPlacement}>
          {renderPhoneLinkComp()}
        </CoreTooltip>
      ) : (
        <>{renderPhoneLinkComp()}</>
      )}
    </>
  );
}
