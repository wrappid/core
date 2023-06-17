import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NativeRightDrawer } from "@wrappid/styled-components";
import { toggleRightMenuState } from "../../store/action/menuAction";

export default function CoreRightDrawer(props) {
  const dispatch = useDispatch();
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  const toggleRightDrawer = () => {
    dispatch(toggleRightMenuState());
  };
  return (
    <NativeRightDrawer
      onOpen={toggleRightDrawer}
      onClose={toggleRightDrawer}
      open={rightMenuOpen}
      {...props}
    >
      {props.children}
    </NativeRightDrawer>
  );
}
