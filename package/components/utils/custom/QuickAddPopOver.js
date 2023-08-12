import { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate } from "@wrappid/styled-components";

import { CoreMenuContext } from "../../../config/contextHandler";
import CoreMenu from "../../inputs/CoreMenu";

export default function QuickAddPopOver(props) {
  const navigate = nativeUseNavigate();
  const menuData = useContext(CoreMenuContext);
  const { onClose } = props;

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <CoreMenu
      menu={menuData?.quickAddMenu}
      miniDrawer={false}
      multiLevel={false}
      open={true}
      OnMenuClick={OnMenuClick}
    />
  );
}
