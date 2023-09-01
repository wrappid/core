// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { UtilityClasses } from "@wrappid/styles";

import CoreIconText from "./CoreIconText";
import CoreIcon, { __IconTypes } from "..//CoreIcon";
import CoreClasses from "../../../styles/CoreClasses";
import { maskEmailOrPhone } from "../../../utils/stringUtils";
import CoreStack from "../../layouts/CoreStack";
import CoreLink from "../../navigation/CoreLink";
import CoreTooltip from "../CoreTooltip";
import CoreTypographyBody2 from "../paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";

export default function CoreEmailLink(props) {
  const {
    limitChars = 30,
    email,
    verified,
    tooltipPlacement = "bottom",
    size = "medium",
    mask = false,
    iconButton = false
  } = props;

  const renderEmailLinkComp = () => {
    return (
      <>
        {email ? (
          iconButton ?
            <CoreLink href={`mailto:${email}`}>
              <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
               mail
              </CoreIcon>
            </CoreLink>
            :
            <CoreStack direction={"row"} spacing={1}>
              <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>mail</CoreIcon>

              <CoreLink href={`mailto:${email}`}>
                {size === "small" ? (
                  <CoreTypographyCaption
                    hideSeeMore={true}
                    limitChars={limitChars}
                    mask={mask}
                  >
                    {mask ? maskEmailOrPhone(email) : email}
                  </CoreTypographyCaption>
                ) : (
                  <CoreTypographyBody2
                    styleClasses={[UtilityClasses.LINK.PHONE_EMAIL_LINK]}
                    hideSeeMore={true}
                    limitChars={limitChars}
                    mask={mask}
                  >
                    {mask ? maskEmailOrPhone(email) : email}
                  </CoreTypographyBody2>
                )}
              </CoreLink>

              {email && verified !== undefined && (
                <CoreIcon
                  type={__IconTypes.MATERIAL_OUTLINED_ICON}
                  styleClasses={
                    [
                      verified
                        ? CoreClasses.ICON.VERIFIED_SUCCESS
                        : CoreClasses.ICON.VERIFIED_WARNING
                    ]
                  }
                >
                  {verified ? "verified" : "error_outline"}
                </CoreIcon>
              )}
            </CoreStack>
        ) : (
          iconButton ?
            <CoreIconText 
              type={__IconTypes.MATERIAL_OUTLINED_ICON} 
              icon="email" 
              text={"NA"} 
            />
            :
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
