// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIcon from "./CoreIcon";
import CoreTypographyBody2 from "./CoreTypographyBody2";
import CoreTypographyCaption from "./CoreTypographyCaption";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreStack from "../layouts/CoreStack";
import CoreLink from "../navigation/CoreLink";

export default function CoreIconText(props) {
  props = sanitizeComponentProps(CoreIconText, props);
  const {
    icon,
    iconColor,
    text,
    type,
    link = false,
    href,
    tailIcon,
    tailIconType,
    size,
    tailIconSize,
    tailIconColor,
    limitChars,
    hideSeeMore,
    styleClasses,
  } = props;

  const getTextComponent = () => {
    if (size === "small") {
      return (
        <CoreTypographyCaption
          styleClasses={[...(styleClasses || [])]}
          hideSeeMore={hideSeeMore}
          limitChars={limitChars}
        >
          {text}
        </CoreTypographyCaption>
      );
    } else {
      return (
        <CoreTypographyBody2
          styleClasses={[...(styleClasses || [])]}
          hideSeeMore={hideSeeMore}
          limitChars={limitChars}
        >
          {text}
        </CoreTypographyBody2>
      );
    }
  };

  const getIconStyleClass = (colorOb) => {
    let defaultClass = [CoreClasses?.COLOR?.TEXT_PRIMARY];

    if (!colorOb) {
      return defaultClass;
    } else if (typeof colorOb === "string") {
      if (colorOb === "primary") {
        return defaultClass;
      } else if (colorOb === "secondary") {
        return [CoreClasses?.COLOR?.TEXT_SECONDARY];
      } else if (colorOb === "success") {
        return [CoreClasses?.COLOR?.TEXT_SUCCESS];
      } else if (colorOb === "info") {
        return [CoreClasses?.COLOR?.TEXT_INFO];
      } else if (colorOb === "error") {
        return [CoreClasses?.COLOR?.TEXT_ERROR];
      } else {
        return defaultClass;
      }
    } else if (Array.isArray(colorOb)) {
      return colorOb;
    } else {
      return defaultClass;
    }
  };

  return (
    <CoreStack direction="row" spacing={1}>
      <CoreIcon
        size={size}
        styleClasses={getIconStyleClass(iconColor)}
        type={type}
      >
        {icon}
      </CoreIcon>

      {/* @todo need to change the "style" below */}
      {link ? (
        <CoreLink
          href={href || "#"}
          style={{ fontSize: 12 }}
          styleClasses={[CoreClasses.MARGIN.ML1]}
        >
          {getTextComponent()}
        </CoreLink>
      ) : (
        getTextComponent()
      )}

      {tailIcon && (
        <CoreIcon
          size={tailIconSize || size}
          styleClasses={getIconStyleClass(tailIconColor)}
          type={tailIconType || type}
        >
          {tailIcon}
        </CoreIcon>
      )}
    </CoreStack>
  );
}
