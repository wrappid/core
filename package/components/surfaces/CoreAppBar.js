import React, { useEffect, useState } from "react";
import { getSettingMeta } from "../../store/action/mdmAction";
import { useDispatch, useSelector } from "react-redux";
import { urls } from "../../config/constants";
import { NativeAppBar } from "@wrappid/styled-components";
import { UtilityClasses } from "@wrappid/styles";
import { APP_PLATFORM, detectPlatform } from "../../utils/themeUtil";
import CoreClasses from "../../styles/CoreClasses";
import CoreProfilePopOver from "../utils/custom/CoreProfilePopOver";
import CorePopover from "../utils/CorePopover";
import CoreToolbar from "../utils/CoreToolbar";
import CoreStack from "../layouts/CoreStack";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreImage from "../dataDisplay/CoreImage";
import CoreAvatar from "../dataDisplay/CoreAvatar";

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
      <NativeAppBar {...props}>
        <CoreToolbar
          styleClasses={[
            UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            CoreClasses.FLEX.DIRECTION_ROW,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          ]}
        >
          <CoreStack
            direction="row"
            styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            <CoreIconButton
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              disabled={!auth?.uid}
              sx={{ marginLeft: "-16px" }}
            >
              <CoreIcon>menu</CoreIcon>
            </CoreIconButton>

            <CoreImage
              src={
                platform === APP_PLATFORM
                  ? require("../../../../../src/images/logo.png")
                  : "/images/logo.png"
              }
              alt="Rxefy Logo"
              height={30}
              width={100}
              onClick={() => {
                navigate("/" + urls.DASHBOARD);
              }}
              // styleClasses={[StyledComponentClasses.CORE_APP_BAR.APP_BAR_LOGO]}
            />
          </CoreStack>

          {auth && auth.uid && (
            <CoreStack
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
                <CoreIconButton>
                  <CoreIcon>account_balance_wallet_outlinedIcon</CoreIcon>
                </CoreIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarHelp")?.value
                ?.flag && (
                <CoreIconButton
                  title={"Help & Support"}
                  onClick={(e) => {
                    console.log("Help & Support clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.HELP_SUPPORT);
                  }}
                >
                  <CoreIcon>help_outline</CoreIcon>
                </CoreIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarNotification")
                ?.value?.flag && (
                <CoreIconButton
                  title={"Show Notification"}
                  onClick={(e) => {
                    console.log("Notification clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.NOTIFICATION);
                  }}
                >
                  <CoreIcon>notifications_none_outlined</CoreIcon>
                </CoreIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarAdd")?.value
                ?.flag && (
                <CoreIconButton
                  title={"Quick Menu"}
                  onClick={(e) => {
                    console.log("Quick Menu clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.QUICK_MENU);
                  }}
                >
                  <CoreIcon>add_circle_outlined</CoreIcon>
                </CoreIconButton>
              )}

              <CoreIconButton
                onClick={(e) => {
                  console.log("Profile clicked");
                  handleAppbarPopOverOpen(e, appbarPopOver.PROFILE);
                }}
              >
                <CoreAvatar
                  src={auth?.photo || "photo.jpg"}
                  size={32}
                  // styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
                />
              </CoreIconButton>
            </CoreStack>
          )}
        </CoreToolbar>
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
