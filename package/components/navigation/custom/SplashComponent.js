import React from "react";

import { useSelector } from "react-redux";
import {
  NativeDomNavigate,
  nativeUseLocation,
} from "@wrappid/styled-components";

import { urls } from "../../../config/constants";
import { CoreTypographyBody1, CoreBox } from "@wrappid/core";
import { CoreClasses } from "@wrappid/styles";

export default function SplashComponent() {
  const _routes = useSelector((state) => state.route.routes);
  const auth = useSelector((state) => state.auth);
  let location = nativeUseLocation();

  const checkAppLoadDependencies = () => {
    if (_routes && Array.isArray(_routes) && _routes?.length > 0) {
      if (auth?.uid) {
        if (_routes.filter((r) => r.authRequired)?.length > 0) {
          return { message: "Navigating...", success: true };
        } else {
          return { message: "Loading authenticated routes...", success: false };
        }
      } else return { message: "Navigating...", success: true };
    } else {
      return { message: "Loading routes...", success: false };
    }
  };

  if (checkAppLoadDependencies()?.success) {
    if (auth.uid) {
      if (location?.state?.recalledPath) {
        console.log("&&&&&&&&&&&&&&&&&&&\n GING TO RECALL\n&&&&&&&&&&&&&&&&&&");
        return <NativeDomNavigate to={location?.state?.recalledPath} />;
      } else {
        console.log(
          "&&&&&&&&&&&&&&&&&&&\n GING TO DASHBOARD\n&&&&&&&&&&&&&&&&&&"
        );
        return <NativeDomNavigate to={"/" + urls.DASHBOARD} />;
      }
    } else if (
      location?.state?.sessionExpired &&
      (location.pathname !== "/" + urls.PASSWORD_ROUTE ||
        location.pathname !== "/")
    ) {
      console.log("&&&&&&&&&&&&&&&&&&&\n GING TO PASSWORD\n&&&&&&&&&&&&&&&&&&");
      return <NativeDomNavigate to={"/" + urls.PASSWORD_ROUTE} />;
    } else if (
      location.pathname !== "/" + urls.LOGIN_ROUTE ||
      location.pathname !== "/"
    ) {
      console.log(
        "&&&&&&&&&&&&&&&&&&&\n GING TO CHEK USER EXIST\n&&&&&&&&&&&&&&&&&&"
      );
      return <NativeDomNavigate to={"/" + urls.LOGIN_ROUTE} />;
    }
  }

  return (
    <CoreBox
    //   styleClasses={[
    //     CoreClasses.HEIGHT.VH_100,
    //     CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
    //     CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
    //   ]}
    >
      {/* <RxLoadingGif /> */}

      <CoreTypographyBody1>
        {checkAppLoadDependencies()?.message}
      </CoreTypographyBody1>
    </CoreBox>
  );
}
