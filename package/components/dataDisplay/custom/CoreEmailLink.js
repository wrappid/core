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

export default function CoreEmailLink(props) {
  const {
    limitChars = 30,
    email,
    verified,
    tooltipPlacement = "bottom",
    size = "medium",
    mask = false,
  } = props;

  const renderEmailLinkComp = () => {
    return (
      <>
        {email ? (
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
