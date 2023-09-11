// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIconText from "./CoreIconText";
import CoreIcon, { __IconTypes } from "..//CoreIcon";
import CoreClasses from "../../../styles/CoreClasses";
import { maskEmailOrPhone } from "../../../utils/stringUtils";
import CoreStack from "../../layouts/CoreStack";
import CoreLink from "../../navigation/CoreLink";
import CoreTooltip from "../CoreTooltip";
import CoreTypographyBody2 from "../paragraph/CoreTypographyBody2";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";

export default function CorePhoneLink(props) {
  const {
    limitChars = 30,
    phone,
    verified,
    tooltipPlacement = "bottom",
    size = "medium",
    mask = false,
    iconButton = false
  } = props;

  const renderPhoneLinkComp = () => {
    return (
      <>
        {phone ? (
          iconButton ?
            <CoreLink href={`tel:${phone}`}>
              <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
                call
              </CoreIcon>
            </CoreLink>
            :
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
                    styleClasses={[CoreClasses?.NAVIGATION?.PHONE_EMAIL_LINK]}
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
                  type={__IconTypes.MATERIAL_OUTLINED_ICON}
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
          iconButton ?
            <CoreIconText 
              type={__IconTypes.MATERIAL_OUTLINED_ICON} 
              icon="call" 
              text={"NA"} 
            />
            :
            <>
              {size === "small" ? (
                <CoreTypographyCaption hideSeeMore={true} limitChars={limitChars}>
                  {"Not Available"}
                </CoreTypographyCaption>
              ) : (
                iconButton ?
                  <CoreIconText 
                    type={__IconTypes.MATERIAL_OUTLINED_ICON} 
                    icon="call" 
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
