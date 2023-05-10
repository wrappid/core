import React, { useEffect, useState } from "react";
import { getSettingMeta } from "../../store/action/mdmAction";
import { useDispatch, useSelector } from "react-redux";
import { urls } from "../../config/constants";
import {
  NativeAppBar,
  NativeToolbar,
  NativeStack,
  NativeIconButton,
  NativeIcon,
  NativeImage,
  NativeAvatar,
} from "@wrappid/styled-components";
import { UtilityClasses } from "@wrappid/styles";
import { APP_PLATFORM, detectPlatform } from "../../utils/themeUtil";
import CoreClasses from "../../styles/CoreClasses";
import CoreProfilePopOver from "../utils/custom/CoreProfilePopOver";
import CorePopover from "../utils/CorePopover";

export default function CoreAppBar(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const mdm = useSelector((state) => state.mdm);
  const [getSettingMetaFlag, setGetSettingMetaFlag] = useState(false);
  const [platform, setPlatform] = useState(null);

  const { handleDrawer } = props;

  const appbarPopOver = {
    HELP_SUPPORT: "HELP_SUPPORT",
    NOTIFICATION: "NOTIFICATION",
    PROFILE: "PROFILE",
    QUICK_MENU: "QUICK_MENU",
  };

  React.useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  useEffect(() => {
    if (getSettingMetaFlag) {
      if (mdm.getSettingMetaSuccess) {
        setGetSettingMetaFlag(false);
      }
      dispatch(getSettingMeta(null, auth.accessToken));
    }
  }, [
    getSettingMetaFlag,
    mdm.getSettingMetaSuccess,
    dispatch,
    auth.accessToken,
  ]);

  /* AppBar PopOver */
  const [_appbarPopOverAnchorEl, set_appbarPopOverAnchorEl] =
    React.useState(null);
  // const _appbarPopoverOpen = Boolean(_appbarPopOverAnchorEl);
  const _appbarID = "appbar-popover";
  const [_appbarContent, set_appbarContent] = React.useState(null);
  const handleAppbarPopOverClose = (e) => {
    set_appbarContent(null);
    set_appbarPopOverAnchorEl(null);
  };
  const handleAppbarPopOverOpen = (e, appBarPopOverCons) => {
    set_appbarContent(appBarPopOverCons);
    set_appbarPopOverAnchorEl(e.currentTarget);
  };

  return (
    <>
      <NativeAppBar
        {...props}
        handleDrawer={handleDrawer}
        navigateString={"/" + urls.DASHBOARD}
        auth={auth}
        style={{ flex: 1 }}
      >
        <NativeToolbar
          styleClasses={[
            UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            CoreClasses.FLEX.DIRECTION_ROW,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          ]}
        >
          <NativeStack
            direction="row"
            styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            <NativeIconButton
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              disabled={!auth?.uid}
              sx={{ marginLeft: "-16px" }}
            >
              <NativeIcon>menu</NativeIcon>
            </NativeIconButton>

            <NativeImage
              src={
                platform === APP_PLATFORM
                  ? require("../../../../../src/images/logo.png")
                  : "/images/logo.png"
              }
              alt="Rxefy Logo"
              height={30}
              width={100}
              onClick={() => {
                navigate(navigateString);
              }}
              // styleClasses={[StyledComponentClasses.CORE_APP_BAR.APP_BAR_LOGO]}
            />
          </NativeStack>

          {auth && auth.uid && (
            <NativeStack
              direction="row"
              NativeId="appBarMenuGrid"
              styleClasses={[
                CoreClasses.WIDTH.W_100,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              ]}
            >
              {mdm?.settingMeta?.find((f) => f.name === "appBarWalet")?.value
                ?.flag && (
                <NativeIconButton>
                  <NativeIcon>account_balance_wallet_outlinedIcon</NativeIcon>
                </NativeIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarHelp")?.value
                ?.flag && (
                <NativeIconButton
                  title={"Help & Support"}
                  onClick={(e) => {
                    console.log("Help & Support clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.HELP_SUPPORT);
                  }}
                >
                  <NativeIcon>help_outline</NativeIcon>
                </NativeIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarNotification")
                ?.value?.flag && (
                <NativeIconButton
                  title={"Show Notification"}
                  onClick={(e) => {
                    console.log("Notification clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.NOTIFICATION);
                  }}
                >
                  <NativeIcon>notifications_none_outlined</NativeIcon>
                </NativeIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarAdd")?.value
                ?.flag && (
                <NativeIconButton
                  title={"Quick Menu"}
                  onClick={(e) => {
                    console.log("Quick Menu clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.QUICK_MENU);
                  }}
                >
                  <NativeIcon>add_circle_outlined</NativeIcon>
                </NativeIconButton>
              )}

              <NativeIconButton
                onClick={(e) => {
                  console.log("Profile clicked");
                  handleAppbarPopOverOpen(e, appbarPopOver.PROFILE);
                }}
              >
                <NativeAvatar
                  src={auth?.photo || "photo.jpg"}
                  size={32}
                  // styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
                />
              </NativeIconButton>
            </NativeStack>
          )}
        </NativeToolbar>
      </NativeAppBar>
      {/* AppBar PopOver */}
      {_appbarContent && (
        <CorePopover
          id={_appbarID}
          open={_appbarPopOverAnchorEl != null}
          anchorEl={_appbarPopOverAnchorEl}
          onClose={handleAppbarPopOverClose}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
        >
          {_appbarContent === appbarPopOver.HELP_SUPPORT ? (
            <>
              {/* Help & Support Popover */}
              <CoreProfilePopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.NOTIFICATION ? (
            <>
              {/* Notifications Popover */}
              <CoreProfilePopOver />
            </>
          ) : _appbarContent === appbarPopOver.QUICK_MENU ? (
            <>
              {/* Add Popover */}
              <CoreProfilePopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.PROFILE ? (
            <>
              {/* Add Popover */}
              <CoreProfilePopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : (
            <></>
          )}
        </CorePopover>
      )}
    </>
  );
}
