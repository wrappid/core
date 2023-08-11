import React, { useContext } from "react";

import { NativeDrawer, nativeUseNavigate } from "@wrappid/styled-components";
import { useDispatch, useSelector } from "react-redux";

import { ThemeContext } from "../../config/contextHandler";
import { toggleMenuItemState } from "../../store/action/menuAction";
import { APP_PLATFORM, WEB_PLATFORM, detectPlatform } from "../../utils/themeUtil";
import CoreMenu from "../inputs/CoreMenu";

export default function CoreDrawer(props) {
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state?.auth);
  const menu = useSelector((state) => state?.menu?.menu);
  const collapse = useSelector((state) => state?.menu?.collapse);
  const theme = useContext(ThemeContext);

  const { open, toggleDrawer } = props;

  const [platform, setPlatform] = React.useState(WEB_PLATFORM);

  React.useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

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
      if (platform === APP_PLATFORM) {
        navigate(item.link);
      }
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
