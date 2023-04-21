import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoreClasses, getEffectiveStyle } from "@wrappid/styles";
import CoreMenu from "../inputs/CoreMenu";
import { NativeDrawer } from "@wrappid/styled-components";

export default function CoreDrawer(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const menu = useSelector((state) => state?.menu?.menu);
  const collapse = useSelector((state) => state?.menu?.collapse);

  const { open } = props;

  // console.log("MENU", menu);

  const OnMenuClick = (item) => {
    if (item.Children && item.Children.length > 0) {
      dispatch(props.toggleMenuItemState(item));
    } else {
      // navigate(item.link);
    }
  };

  return (
    <>
      {auth && auth.uid && (
        <NativeDrawer
          anchor={props.anchor ? props.anchor : "left"}
          variant="permanent"
          open={open}
        >
          <CoreMenu
            menu={menu}
            miniDrawer={true}
            multiLevel={true}
            open={open}
            openCollapse={collapse || {}}
            OnMenuClick={OnMenuClick}
          />
        </NativeDrawer>
      )}
    </>
  );
}
