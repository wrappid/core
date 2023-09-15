// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIconText from "./CoreIconText";
import CoreIcon, { __IconTypes } from "..//CoreIcon";
import CoreClasses from "../../../styles/CoreClasses";
import { maskEmailOrPhone } from "../../../utils/stringUtils";
import CoreLink from "../../navigation/CoreLink";
import CoreTooltip from "../CoreTooltip";

export default function CoreEmailLink(props) {
  const {
    limitChars = 30,
    email,
    verified,
    tooltipPlacement = "bottom",
    size,
    mask = false,
    iconButton = false,
  } = props;

  const renderEmailLinkComp = () => {
    return (
      <>
        {email ? (
          iconButton ? (
            <CoreLink href={`mailto:${email}`}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}
              >
                mail
              </CoreIcon>
            </CoreLink>
          ) : (
            <CoreIconText
              styleClasses={[CoreClasses?.NAVIGATION?.PHONE_EMAIL_LINK]}
              href={`mailto:${email}`}
              limitChars={limitChars}
              hideSeeMore={true}
              type={__IconTypes.MATERIAL_OUTLINED_ICON}
              size={size}
              link={true}
              text={mask ? maskEmailOrPhone(email) : email}
              icon="mail"
              tailIconColor={
                email && verified !== undefined && verified
                  ? [CoreClasses?.ICON?.VERIFIED_SUCCESS]
                  : [CoreClasses?.ICON?.VERIFIED_WARNING]
              }
              tailIcon={
                email && verified !== undefined
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
            icon="email"
            text={"NA"}
          />
        ) : (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon="email"
            text={"Not Available"}
          />
        )}
      </>
    );
  };

  return (
    <>
      {email && email.length > limitChars ? (
        <CoreTooltip title={email} arrow placement={tooltipPlacement}>
          {renderEmailLinkComp()}
        </CoreTooltip>
      ) : (
        <>{renderEmailLinkComp()}</>
      )}
    </>
  );
}
