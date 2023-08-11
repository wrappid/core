// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeRightDrawer } from "@wrappid/styled-components";
import { useDispatch, useSelector } from "react-redux";

import { toggleRightMenuState } from "../../store/action/menuAction";

export default function CoreRightDrawer(props) {
  const dispatch = useDispatch();
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  const toggleRightDrawer = () => {
    dispatch(toggleRightMenuState());
  };
  
  return (
    rightMenuOpen && (
      <NativeRightDrawer
        onOpen={toggleRightDrawer}
        onClose={toggleRightDrawer}
        open={rightMenuOpen}
        {...props}
      >
        {props.children}
      </NativeRightDrawer>
    )
  );
}
