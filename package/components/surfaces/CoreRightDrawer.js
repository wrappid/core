import React from "react";
import { useSelector } from "react-redux";
import { SCRightDrawer } from "../../styledComponents/navigation/SCRightDrawer";

export default function CoreRightDrawer(props) {
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  return (
    <SCRightDrawer open={rightMenuOpen} {...props}>
      {props.children}
    </SCRightDrawer>
  );
}
