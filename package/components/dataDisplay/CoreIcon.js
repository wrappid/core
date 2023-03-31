import React from "react";
import { SCIcon } from "@wrappid/styled-components";

export const __IconTypes = {
  MATERIAL_ICON: "MATERIAL_ICON", // Default support of MUI
  MATERIAL_OUTLINED_ICON: "MATERIAL_OUTLINED_ICON",
  FONTAWESOME_V5_SOLID_ICON: "FONTAWESOME_V5_SOLID_ICON",
  FONTAWESOME_V5_REGULAR_ICON: "FONTAWESOME_V5_REGULAR_ICON",
  RXICON_V1_REGULAR_ICON: "RXICON_V1_REGULAR_ICON",
};

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */
export default function CoreIcon(props) {
  const { type, icon, options, sx, ...restProps } = props;

  const renderCoreIcon = () => {
    let tmpType = type || options?.type || __IconTypes.MATERIAL_ICON;
    let tmpIcon = props.children || icon || options?.icon || "";
    switch (tmpType) {
      case __IconTypes.RXICON_V1_REGULAR_ICON:
        return (
          <SCIcon
            sx={{ ...sx, overflow: "unset" }}
            baseClassName="rxi"
            className={tmpIcon}
            size="small"
            {...restProps}
          />
        );
      case __IconTypes.FONTAWESOME_V5_REGULAR_ICON:
        return (
          <SCIcon
            sx={{ ...sx, overflow: "unset" }}
            baseClassName="far"
            className={tmpIcon}
            size="small"
            {...restProps}
          />
        );
      case __IconTypes.FONTAWESOME_V5_SOLID_ICON:
        return (
          <SCIcon
            sx={{ ...sx, overflow: "unset" }}
            baseClassName="fas"
            className={tmpIcon}
            size="small"
            {...restProps}
          />
        );
      case __IconTypes.MATERIAL_OUTLINED_ICON:
        return (
          <SCIcon
            baseClassName="material-icons-outlined"
            sx={sx}
            size="small"
            {...restProps}
          >
            {tmpIcon}
          </SCIcon>
        );
      case __IconTypes.MATERIAL_ICON:
      default:
        return (
          <SCIcon sx={sx} size="small" {...restProps}>
            {tmpIcon}
          </SCIcon>
        );
    }
  };

  return <>{renderCoreIcon()}</>;
}
