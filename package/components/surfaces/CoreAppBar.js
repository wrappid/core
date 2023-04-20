import React, { useEffect, useState } from "react";
import { getSettingMeta } from "../../store/action/mdmAction";
import { useDispatch, useSelector } from "react-redux";
import { urls } from "../../config/constants";
import { NativeAppBar } from "@wrappid/styled-components";

export default function CoreAppBar(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const mdm = useSelector((state) => state.mdm);
  const [getSettingMetaFlag, setGetSettingMetaFlag] = useState(false);
  const { handleDrawer } = props;

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

  return (
    <NativeAppBar
      {...props}
      handleDrawer={handleDrawer}
      navigateString={"/" + urls.DASHBOARD}
      auth={auth}
    >
      {props.children}
    </NativeAppBar>
  );
}

// /* AppBar PopOver */
// const [_appbarPopOverAnchorEl, set_appbarPopOverAnchorEl] =
//   React.useState(null);
// // const _appbarPopoverOpen = Boolean(_appbarPopOverAnchorEl);
// const _appbarID = "appbar-popover";
// const [_appbarContent, set_appbarContent] = React.useState(null);
// const handleAppbarPopOverClose = (e) => {
//   set_appbarContent(null);
//   set_appbarPopOverAnchorEl(null);
// };
// const handleAppbarPopOverOpen = (e, appBarPopOverCons) => {
//   set_appbarContent(appBarPopOverCons);
//   set_appbarPopOverAnchorEl(e.currentTarget);
// };

// {auth && auth.uid && (
//   <NativeStack
//     direction="row"
//     NativeId="appBarMenuGrid"
//     styleClasses={[
//       CoreClasses.WIDTH.W_100,
//       CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
//     ]}
//   >
//     {mdm?.settingMeta?.find((f) => f.name === "appBarWalet")?.value
//       ?.flag && (
//       <NativeIconButton>
//         <NativeIcon>account_balance_wallet_outlinedIcon</NativeIcon>
//       </NativeIconButton>
//     )}

//     {mdm?.settingMeta?.find((f) => f.name === "appBarHelp")?.value
//       ?.flag && (
//       <NativeIconButton
//         title={"Help & Support"}
//         onClick={(e) => {
//           console.log("Help & Support clicked");
//           handleAppbarPopOverOpen(e, appbarPopOver.HELP_SUPPORT);
//         }}
//       >
//         <NativeIcon>help_outline</NativeIcon>
//       </NativeIconButton>
//     )}

//     {mdm?.settingMeta?.find((f) => f.name === "appBarNotification")
//       ?.value?.flag && (
//       <NativeIconButton
//         title={"Show Notification"}
//         onClick={(e) => {
//           console.log("Notification clicked");
//           handleAppbarPopOverOpen(e, appbarPopOver.NOTIFICATION);
//         }}
//       >
//         <NativeIcon>notifications_none_outlined</NativeIcon>
//       </NativeIconButton>
//     )}

//     {mdm?.settingMeta?.find((f) => f.name === "appBarAdd")?.value
//       ?.flag && (
//       <NativeIconButton
//         title={"Quick Menu"}
//         onClick={(e) => {
//           console.log("Quick Menu clicked");
//           handleAppbarPopOverOpen(e, appbarPopOver.QUICK_MENU);
//         }}
//       >
//         <NativeIcon>add_circle_outlined</NativeIcon>
//       </NativeIconButton>
//     )}

//     <NativeIconButton
//       onClick={(e) => {
//         console.log("Profile clicked");
//         handleAppbarPopOverOpen(e, appbarPopOver.PROFILE);
//       }}
//     >
//       <NativeAvatar
//         src={auth?.photo ? auth?.photo : "photo.jpg"}
//         styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
//       />
//     </NativeIconButton>
//   </NativeStack>
// )}

//       {/* AppBar PopOver */}
//       {_appbarContent && (
//         <NativePopover
//           id={_appbarID}
//           open={_appbarPopOverAnchorEl != null}
//           anchorEl={_appbarPopOverAnchorEl}
//           onClose={handleAppbarPopOverClose}
//           anchorOrigin={{
//             horizontal: "left",
//             vertical: "bottom",
//           }}
//         >
//           {_appbarContent === appbarPopOver.HELP_SUPPORT ? (
//             <>
//               {/* Help & Support Popover */}
//               <HelpAndSupportPopOver onClose={handleAppbarPopOverClose} />
//             </>
//           ) : _appbarContent === appbarPopOver.NOTIFICATION ? (
//             <>
//               {/* Notifications Popover */}
//               <NotificationPopOver />
//             </>
//           ) : _appbarContent === appbarPopOver.QUICK_MENU ? (
//             <>
//               {/* Add Popover */}
//               <QuickAddPopOver onClose={handleAppbarPopOverClose} />
//             </>
//           ) : _appbarContent === appbarPopOver.PROFILE ? (
//             <>
//               {/* Add Popover */}
//               {/* <RxProfilePopOver onClose={handleAppbarPopOverClose} /> */}
//             </>
//           ) : (
//             <></>
//           )}
//         </NativePopover>
//       )}
