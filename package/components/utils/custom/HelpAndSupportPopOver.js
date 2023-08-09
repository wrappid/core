import React, { useContext } from "react";

import { nativeUseNavigate } from "@wrappid/styled-components";

import CoreMenu from "../../inputs/CoreMenu";
import { CoreMenuContext } from "../../../config/contextHandler";

export default function HelpAndSupportPopOver(props) {
  const navigate = nativeUseNavigate();
  const menuData = useContext(CoreMenuContext);
  const { onClose } = props;

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <CoreMenu
      menu={menuData?.helpAndSupportMenu}
      miniDrawer={false}
      multiLevel={false}
      open={true}
      OnMenuClick={OnMenuClick}
    />
  );
}
