import React from "react";

import { useDispatch, useSelector } from "react-redux";

import CoreMenu from "../inputs/CoreMenu";
import { SCDrawer } from "@wrappid/styled-components";
import { CoreClasses, getEffectiveStyle } from "@wrappid/styles";
import { toggleMenuItemState } from "../../store/action/menuAction";

export default function CoreDrawer(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const menu = useSelector((state) => state?.menu?.menu);
  const collapse = useSelector((state) => state?.menu?.collapse);

  const { open } = props;

  // console.log("MENU", menu);

  const OnMenuClick = (item) => {
    if (item.Children && item.Children.length > 0) {
      dispatch(toggleMenuItemState(item));
    } else {
      // navigate(item.link);
    }
  };

  return (
    <>
      {auth && auth.uid && (
        <SCDrawer
          anchor={props.anchor ? props.anchor : "left"}
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              ...getEffectiveStyle([CoreClasses.APP.APP_DRAWER_PAPER_HEIGHT]),
            },
          }}
        >
          <CoreMenu
            menu={menu}
            miniDrawer={true}
            multiLevel={true}
            open={open}
            openCollapse={collapse || {}}
            OnMenuClick={OnMenuClick}
          />
        </SCDrawer>
      )}
    </>
  );
}
