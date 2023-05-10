import React from "react";

import { nativeUseNavigate } from "@wrappid/styled-components";

import { urls } from "../../../config/constants";
import { CoreMenu } from "../../inputs/CoreMenu";
import { MENU_SEPERATOR } from "../../../config/menuConstants";

export default function HelpAndSupportPopOver(props) {
  const navigate = nativeUseNavigate();
  const { onClose } = props;
  const supportMenu = [
    {
      icon: "support",
      id: "ContactSupport",
      label: "Contact Support",
      link: urls.REQUEST_SUPPORT,
    },
    { type: MENU_SEPERATOR },
    {
      icon: "tips_and_updates",
      id: "FeatureRequest",
      label: "Feature Request",
      link: urls.REQUEST_FEATURE,
    },
    {
      icon: "auto_fix_high",
      id: "EnhancementRequest",
      label: "Enhancement Request",
      link: urls.REQUEST_ENHANCEMENT,
    },
    { type: MENU_SEPERATOR },
    {
      icon: "bug_report",
      id: "reportBug",
      label: "Report Bug",
      link: urls.REPORT_BUG,
    },
  ];

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <CoreMenu
      menu={supportMenu}
      miniDrawer={false}
      multiLevel={false}
      open={true}
      OnMenuClick={OnMenuClick}
    />
  );
}
