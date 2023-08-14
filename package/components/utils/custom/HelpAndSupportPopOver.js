// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/styled-components";

import { CoreMenuContext } from "../../../config/contextHandler";
import CoreMenu from "../../inputs/CoreMenu";

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
