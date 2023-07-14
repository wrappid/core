import React from "react";
import CoreIcon from "..//CoreIcon";
import CoreTooltip from "../CoreTooltip";
import CoreTypographyBody2 from "../paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";
import CoreStack from "../../layouts/CoreStack";
import CoreLink from "../../navigation/CoreLink";
import { maskEmailOrPhone } from "../../../utils/stringUtils";
import { UtilityClasses } from "@wrappid/styles";

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
          <CoreStack
            styleClasses={[UtilityClasses.LINK.PHONE_EMAIL_LINK]}
            direction={"row"}
            spacing={1}
          >
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
                fontSize={"small"}
                color={verified ? "success" : "warning"}
              >
                {verified ? "check_circle" : "error_outline"}
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
