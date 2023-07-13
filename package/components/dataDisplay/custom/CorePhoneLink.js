import React from "react";
import CoreIcon from "..//CoreIcon";
import CoreTooltip from "../CoreTooltip";
import CoreTypographyBody2 from "../paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";
import CoreStack from "../../layouts/CoreStack";
import CoreLink from "../../navigation/CoreLink";
import { maskEmailOrPhone } from "../../../utils/stringUtils";

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
