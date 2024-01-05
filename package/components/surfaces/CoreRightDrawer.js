// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeRightDrawer } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

import { toggleRightMenuState } from "../../store/action/menuAction";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreRightDrawer(props) {
  props = sanitizeComponentProps(CoreRightDrawer, props);
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
