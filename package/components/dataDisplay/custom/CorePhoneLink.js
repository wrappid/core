// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIconText from "./CoreIconText";
import CoreIcon, { __IconTypes } from "..//CoreIcon";
import CoreClasses from "../../../styles/CoreClasses";
import { maskEmailOrPhone } from "../../../utils/stringUtils";
import CoreLink from "../../navigation/CoreLink";
import CoreTooltip from "../CoreTooltip";

export default function CorePhoneLink(props) {
  const {
    limitChars = 30,
    phone,
    verified,
    tooltipPlacement = "bottom",
    size,
    mask = false,
    iconButton = false,
  } = props;

  const renderPhoneLinkComp = () => {
    return (
      <>
        {phone ? (
          iconButton ? (
            <CoreLink href={`tel:${phone}`}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
                call
              </CoreIcon>
            </CoreLink>
          ) : (
            <CoreIconText
              styleClasses={[CoreClasses?.NAVIGATION?.PHONE_EMAIL_LINK]}
              link={true}
              href={`tel:${phone}`}
              limitChars={limitChars}
              hideSeeMore={true}
              type={__IconTypes.MATERIAL_OUTLINED_ICON}
              size={size}
              text={mask ? maskEmailOrPhone(phone) : phone}
              icon="call"
              tailIconColor={
                phone && verified !== undefined && verified 
                  ? [CoreClasses?.ICON?.VERIFIED_SUCCESS]
                  : [CoreClasses?.ICON?.VERIFIED_WARNING]
              }
              tailIcon={
                phone && verified !== undefined
                  ? verified
                    ? "verified"
                    : "error_outline"
                  : null
              }
            />
          )
        ) : iconButton ? (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon="call"
            text={"NA"}
          />
        ) : (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon="call"
            text={"Not Available"}
          />
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
