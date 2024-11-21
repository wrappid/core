// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIcon, { __IconTypes } from "./CoreIcon";
import CoreIconText from "./CoreIconText";
import CoreTooltip from "./CoreTooltip";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { maskEmailOrPhone } from "../../utils/stringUtils";
import CoreLink from "../navigation/CoreLink";

export default function CoreContactLink(props) {
  props = sanitizeComponentProps(CoreContactLink, props);

  const {
    variant = "mail", // "mail", "phone", "sms", etc.
    contact,
    limitChars = 30,
    verified,
    tooltipPlacement = "bottom",
    size,
    mask = false,
    iconButton = false,
    icon, 
    unavailableText = "Not Available",
    naText = "NA",
  } = props;

  // Default values based on the variant prop
  const variantConfig = {
    link: {
      defaultIcon    : "link",
      naText         : "No Link",
      protocol       : "http",
      unavailableText: "No Link",
    },
    mail: {
      defaultIcon    : "mail",
      naText         : "No Email",
      protocol       : "mailto",
      unavailableText: "No Email",
    },
    phone: {
      defaultIcon    : "call",
      naText         : "No Phone Number",
      protocol       : "tel",
      unavailableText: "No Phone Number",
    },
    sms: {
      defaultIcon    : "sms",
      naText         : "No SMS Number",
      protocol       : "sms",
      unavailableText: "No SMS Number",
    },
  };

  const { protocol, defaultIcon, unavailableText: defaultUnavailableText, naText: defaultNaText } = variantConfig[variant] || variantConfig.mail;

  const finalIcon = icon || defaultIcon;
  const finalUnavailableText = unavailableText || defaultUnavailableText;
  const finalNaText = naText || defaultNaText;

  const renderContactLinkComp = () => {
    return (
      <>
        {contact ? (
          iconButton ? (
            <CoreLink href={`${protocol}:${contact}`}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}
                icon={finalIcon}
              />
            </CoreLink>
          ) : (
            <CoreIconText
              href={`${protocol}:${contact}`}
              limitChars={limitChars}
              hideSeeMore={true}
              type={__IconTypes.MATERIAL_OUTLINED_ICON}
              size={size}
              link={true}
              text={mask ? maskEmailOrPhone(contact) : contact}
              icon={finalIcon}
              tailIconColor={
                contact && verified !== undefined && verified
                  ? [CoreClasses?.ICON?.VERIFIED_SUCCESS]
                  : [CoreClasses?.ICON?.VERIFIED_WARNING]
              }
              tailIcon={
                contact && verified !== undefined
                  ? verified
                    ? "verified"
                    : "" /** @todo if not verified then a button that call a function that can help verified */
                    // : "error_outline"
                  : null
              }
            />
          )
        ) : iconButton ? (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon={finalIcon}
            text={finalNaText}
          />
        ) : (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon={finalIcon}
            text={finalUnavailableText}
          />
        )}
      </>
    );
  };

  return (
    <>
      {contact && contact.length > limitChars ? (
        <CoreTooltip title={contact} arrow placement={tooltipPlacement}>
          {renderContactLinkComp()}
        </CoreTooltip>
      ) : (
        <>{renderContactLinkComp()}</>
      )}
    </>
  );
}

export const commonContactLinkProps = [
  { description: "Maximum number of characters to display before truncating. If exceeded, full text will be shown in tooltip.", name: "limitChars", types: [{ default: 30, type: "number" }] },
  { description: "Indicates if the contact information is verified. Shows verification status icon when set.", name: "verified", types: [{ type: "boolean" }] },
  { description: "Controls the placement of the tooltip when contact text is truncated.", name: "tooltipPlacement", types: [{ default: "bottom", type: "string" }] },
  { description: "Controls the size of the component.", name: "size", types: [{ type: "string" }] },
  { description: "Custom icon to override the default variant icon.", name: "icon", types: [{ type: "string" }] },
  { description: "When true, masks the contact information for privacy (applies to email and phone numbers).", name: "mask", types: [{ default: false, type: "boolean" }] },
  { description: "When true, displays only the icon as a clickable button without the text.", name: "iconButton", types: [{ default: false, type: "boolean" }] },
  { description: "Text to display when contact information is not provided.", name: "unavailableText", types: [{ default: "Not Available", type: "string" }] },
  { description: "Short text to display when showing icon-only view without contact information.", name: "naText", types: [{ default: "NA", type: "string" }] }
];

CoreContactLink.validProps = [{ description: "Determines the type of contact link to render. Each variant has its own configuration for icon and protocol.", name: "variant", types: [{ type: "string", validValues: ["mail", "phone", "sms", "link"] }] }, { description: "The contact information to display and link to (email address, phone number, URL, etc.)", name: "contact", types: [{ type: "string" }] }, ...commonContactLinkProps];
CoreContactLink.invalidProps = [];
