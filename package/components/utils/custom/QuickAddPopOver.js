import React, { useContext } from "react";

import { nativeUseNavigate } from "@wrappid/styled-components";
import { urls } from "./../../../config/constants";
import { __IconTypes } from "../../dataDisplay/CoreIcon";
import CoreMenu from "../../inputs/CoreMenu";
import { CoreMenuContext } from "../../../config/contextHandler";

export default function QuickAddPopOver(props) {
  const navigate = nativeUseNavigate();
  const {quickAddMenu} = useContext(CoreMenuContext);
  const { onClose } = props;

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <CoreMenu
      menu={quickAddMenu}
      miniDrawer={false}
      multiLevel={false}
      open={true}
      OnMenuClick={OnMenuClick}
    />
  );
}
