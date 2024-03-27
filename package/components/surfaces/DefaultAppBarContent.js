/* eslint-disable id-length */
import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { WEB_PLATFORM } from "@wrappid/core";
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses, WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CoreToolbar from "./CoreToolbar";
import { coreUseLocation } from "../../helper/routerHelper";
import { getSettingMeta } from "../../store/action/mdmAction";
import CoreClasses from "../../styles/CoreClasses";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreImage from "../dataDisplay/CoreImage";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreStack from "../layouts/CoreStack";
import CorePopover from "../utils/CorePopover";
import CoreProfilePopOver from "../utils/CoreProfilePopOver";
import HelpAndSupportPopOver from "../utils/HelpAndSupportPopOver";
import NotificationPopOver from "../utils/NotificationPopOver";
import QuickAddPopOver from "../utils/QuickAddPopOver";

export default function DefaultAppBarContent(props) {
  const dispatch = useDispatch();
  let { config } = React.useContext(WrappidDataContext);
  // eslint-disable-next-line no-unused-vars
  const location = coreUseLocation();
  const auth = useSelector((state) => state.auth);
  const mdm = useSelector((state) => state.mdm);
  const [getSettingMetaFlag, setGetSettingMetaFlag] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [platform, setPlatform] = useState(null);
  const [appbarType, setAppbarType] = useState("primary");

  const {
    handleDrawer,
    logo,
    logoEnabled: _logoEnabled = true,
    iconEnabled: _iconEnabled = true,
  } = props;
  /**
   * state driven component enablement of the app bar content
   */
  // eslint-disable-next-line no-unused-vars
  const [logoEnabled, setLogoEnabled] = useState(_logoEnabled);
  // eslint-disable-next-line no-unused-vars
  const [iconEnabled, setIconEnabled] = useState(_iconEnabled);

  React.useEffect(() => {
    /**
     * @todo
     */
    // from the MDM data change
    // setLogoEnabled(_logoEnabled);
  }, [mdm]);

  const appbarPopOver = {
    HELP_SUPPORT: "HELP_SUPPORT",
    NOTIFICATION: "NOTIFICATION",
    PROFILE     : "PROFILE",
    QUICK_MENU  : "QUICK_MENU",
  };

  React.useEffect(() => {
    setPlatform(config?.wrappid?.platform);
    setAppbarType(config?.wrappid?.appbarType);
  }, []);

  React.useEffect(() => {
    if (getSettingMetaFlag) {
      if (mdm.getSettingMetaSuccess) {
        setGetSettingMetaFlag(false);
      }
      dispatch(getSettingMeta(null, auth.accessToken));
    }
  }, [getSettingMetaFlag, mdm.getSettingMetaSuccess, dispatch, auth.accessToken]);

  /* AppBar PopOver */
  const [_appbarPopOverAnchorEl, set_appbarPopOverAnchorEl] =
    React.useState(null);
  // -- const _appbarPopoverOpen = Boolean(_appbarPopOverAnchorEl);
  const _appbarID = "appbar-popover";
  const [_appbarContent, set_appbarContent] = React.useState(
    appbarPopOver.PROFILE
  );
  const handleAppbarPopOverClose = () => {
    set_appbarContent(null);
    set_appbarPopOverAnchorEl(null);
  };
  const handleAppbarPopOverOpen = (e, appBarPopOverCons) => {
    set_appbarContent(appBarPopOverCons);
    set_appbarPopOverAnchorEl(e?.currentTarget);
  };

  const appBarTextStyle = !appbarType
    ? [CoreClasses.COLOR.TEXT_WHITE]
    : appbarType?.includes("light")
      ? []
      : appbarType?.includes("contrast")
        ? [CoreClasses.COLOR.TEXT_PRIMARY]
        : [CoreClasses.COLOR.TEXT_WHITE];

  return (
    <>
      <CoreToolbar
        styleClasses={[UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
      >
        {logoEnabled && (
          <CoreImage
            height={40}
            width={120}
            src={logo}
            alt="WRAPPID" />
        )
        }

        <CoreStack
          direction="row"
          styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
        >
          {iconEnabled && (
            <CoreIconButton
              styleClasses={appBarTextStyle}
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              disabled={!auth?.uid}
              // sx={{ marginLeft: "-16px" }}
            >
              <CoreIcon>menu</CoreIcon>
            </CoreIconButton>
          )}

        </CoreStack>

        {/* authenticated user content */}
        {auth && auth.uid && (
          <CoreStack
            direction="row"
            NativeId="appBarMenuGrid"
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            {mdm?.settingMeta?.find((f) => f.name === "appBarWalet")?.value
              ?.flag && (
              <CoreIconButton styleClasses={appBarTextStyle}>
                <CoreIcon>account_balance_wallet_outlinedIcon</CoreIcon>
              </CoreIconButton>
            )}

            {mdm?.settingMeta?.find((f) => f.name === "appBarHelp")?.value
              ?.flag && (
              <CoreIconButton
                styleClasses={appBarTextStyle}
                title={"Help & Support"}
                onClick={(e) => {
                  handleAppbarPopOverOpen(e, appbarPopOver.HELP_SUPPORT);
                }}
              >
                <CoreIcon>help_outline</CoreIcon>
              </CoreIconButton>
            )}

            {mdm?.settingMeta?.find((f) => f.name === "appBarNotification")
              ?.value?.flag && (
              <CoreIconButton
                styleClasses={appBarTextStyle}
                title={"Show Notification"}
                onClick={(e) => {
                  handleAppbarPopOverOpen(e, appbarPopOver.NOTIFICATION);
                }}
              >
                <CoreIcon>notifications_none_outlined</CoreIcon>
              </CoreIconButton>
            )}

            {mdm?.settingMeta?.find((f) => f.name === "appBarAdd")?.value
              ?.flag && (
              <CoreIconButton
                styleClasses={appBarTextStyle}
                title={"Quick Menu"}
                onClick={(e) => {
                  handleAppbarPopOverOpen(e, appbarPopOver.QUICK_MENU);
                }}
              >
                <CoreIcon>add_circle_outlined</CoreIcon>
              </CoreIconButton>
            )}

            <CoreIconButton
              onClick={(e) => {
                handleAppbarPopOverOpen(e, appbarPopOver.PROFILE);
              }}
            >
              <CoreAvatar
                src={auth?.photo}
                styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
              />
            </CoreIconButton>
          </CoreStack>
        )}
      </CoreToolbar>

      {/* AppBar PopOver */}
      {_appbarContent && (
        <CorePopover
          id={_appbarID}
          open={
            platform === WEB_PLATFORM
              ? _appbarPopOverAnchorEl !== null
              : _appbarPopOverAnchorEl !== null
          }
          anchorEl={_appbarPopOverAnchorEl}
          onClose={handleAppbarPopOverClose}
          anchorOrigin={{
            horizontal: "left",
            vertical  : "bottom",
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
              <NotificationPopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.QUICK_MENU ? (
            <>
              {/* Add Popover */}
              <QuickAddPopOver onClose={handleAppbarPopOverClose} />
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
