import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoreMenu from "../inputs/CoreMenu";
import { NativeDrawer, nativeUseNavigate } from "@wrappid/styled-components";
import { toggleMenuItemState } from "../../store/action/menuAction";
import { ThemeContext } from "../../config/contextHandler";

export default function CoreDrawer(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state?.auth);
  const menu = useSelector((state) => state?.menu?.menu);
  const collapse = useSelector((state) => state?.menu?.collapse);
  const theme = useContext(ThemeContext);

  const { open, toggleDrawer } = props;

  console.log("MENU DRAWER", menu);

  const OnMenuClick = (item, appFlag) => {
    /**
     * appFlag only passed from native mobile drawer
     */
    // console.log("MENU CLICK", item, appFlag);
    if (appFlag && !item.Children) {
      toggleDrawer();
    }
    if (item.Children && item.Children.length > 0) {
      dispatch(toggleMenuItemState(item));
    } else {
      navigate(item.link);
    }
  };

  return (
    <>
      {auth && auth.uid && (
        <NativeDrawer
          anchor={props.anchor ? props.anchor : "left"}
          variant="permanent"
          open={open}
          theme={theme}
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
