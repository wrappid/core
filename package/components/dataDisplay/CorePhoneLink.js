// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIcon, { __IconTypes } from "./CoreIcon";
import CoreIconText from "./CoreIconText";
import CoreTooltip from "./CoreTooltip";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { maskEmailOrPhone } from "../../utils/stringUtils";
import CoreLink from "../navigation/CoreLink";

export default function CorePhoneLink(props) {
  props = sanitizeComponentProps(CorePhoneLink, props);
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

CorePhoneLink.validProps = [
  { name: "limitChars", types: [{ default: 30, type: "number" }] },
  { name: "verified", types: [{ default: true, type: "boolean", validValues: [true, false] }] },
  { name: "tooltipPlacement", types: [{ default: "bottom", type: "string" }] },
  { name: "mask", types: [{ default: false, type: "boolean", validValues: [true, false] }] },
  { name: "iconButton", types: [{ default: false, type: "boolean", validValues: [true, false] }] },
  {
    name : "sizes",
    types: [{ type: "string" }] 
  },
];
CorePhoneLink.invalidProps = ["sx", "classes"];
