import React from "react";
import { useSelector } from "react-redux";
import { NativeRightDrawer } from "@wrappid/styled-components";

export default function CoreRightDrawer(props) {
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  return (
    <NativeRightDrawer open={rightMenuOpen} {...props}>
      {props.children}
    </NativeRightDrawer>
  );
}
