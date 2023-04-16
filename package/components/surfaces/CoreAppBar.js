import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HelpAndSupportPopOver from "./utils/HelpAndSupportPopOver";
import NotificationPopOver from "./utils/NotificationPopOver";
import QuickAddPopOver from "./utils/QuickAddPopOver";
// import RxProfilePopOver from "./utils/RxProfilePopOver";
import { urls } from "../../config/constants";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreImage from "../dataDisplay/CoreImage";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreStack from "../layouts/CoreStack";
import CoreToolbar from "../surfaces/CoreToolbar";
import CorePopover from "../utils/CorePopover";
import { CoreClasses } from "@wrappid/styles";
import { getSettingMeta } from "../../store/action/mdmAction";
import { SCAppBar } from "@wrappid/styled-components";

export default function CoreAppBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const mdm = useSelector((state) => state.mdm);
  const [getSettingMetaFlag, setGetSettingMetaFlag] = useState(false);
  const { handleDrawer } = props;

  const appbarPopOver = {
    HELP_SUPPORT: "HELP_SUPPORT",
    NOTIFICATION: "NOTIFICATION",
    PROFILE: "PROFILE",
    QUICK_MENU: "QUICK_MENU",
  };

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
      <SCAppBar auth={auth} position="fixed">
        <CoreToolbar
          styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
        >
          <CoreStack direction="row">
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
              src="/images/logo.png"
              alt="Rxefy Logo"
              onClick={() => {
                navigate(`/${urls.DASHBOARD}`);
              }}
              styleClasses={[CoreClasses.CORE_APP_BAR.APP_BAR_LOGO]}
            />
          </CoreStack>

          {auth && auth.uid && (
            <CoreStack
              direction="row"
              coreId="appBarMenuGrid"
              styleClasses={[
                CoreClasses.WIDTH.W_100,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
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
                  src={auth?.photo ? auth?.photo : "photo.jpg"}
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
                />
              </CoreIconButton>
            </CoreStack>
          )}
        </CoreToolbar>
      </SCAppBar>

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
              <HelpAndSupportPopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.NOTIFICATION ? (
            <>
              {/* Notifications Popover */}
              <NotificationPopOver />
            </>
          ) : _appbarContent === appbarPopOver.QUICK_MENU ? (
            <>
              {/* Add Popover */}
              <QuickAddPopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.PROFILE ? (
            <>
              {/* Add Popover */}
              {/* <RxProfilePopOver onClose={handleAppbarPopOverClose} /> */}
            </>
          ) : (
            <></>
          )}
        </CorePopover>
      )}
    </>
  );
}
