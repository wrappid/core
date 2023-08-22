// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDomNavigate, nativeUseLocation } from "@wrappid/styled-components";
import { useSelector } from "react-redux";

import { CoreRouteRegistryContext } from "../../../config/contextHandler";
import CoreClasses from "../../../styles/CoreClasses";
import CoreComponent from "../../CoreComponent";
import CoreTypographyBody1 from "../../dataDisplay/paragraph/CoreTypographyBody1";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";

export default function SplashComponent() {
  const _routes = useSelector(state => state.route.routes);
  const routeRegistry = useContext(CoreRouteRegistryContext);
  const auth = useSelector(state => state.auth);
  let location = nativeUseLocation();

  const checkAuthRouteReg = ()=>{
    let authRoutes = _routes.filter(route => route.authRequired);

    if(authRoutes?.length < 1){
      return false;
    }

    for(let i = 0;i < authRoutes?.length;i++){
      if(!routeRegistry[authRoutes[i].entityRef]){
        return false;
      }
    }

    return true;
  };

  const checkAppLoadDependencies = () => {
    if (_routes && Array.isArray(_routes) && _routes?.length > 0 
      && routeRegistry && Object.keys(routeRegistry).length > 0) {
      if (auth?.uid) {
        if (checkAuthRouteReg()) {
          return { message: "Navigating...", success: true };
        } else {
          return { message: "Loading authenticated routes...", success: false };
        }
      } else return { message: "Navigating...", success: true };
    } else {
      return { message: "Loading routes...", success: false };
    }
  };

  React.useEffect(() => {
    /**
     * @todo
     *
     * must provide a delay here min 1000ms
     */
  }, []);

  if (checkAppLoadDependencies()?.success) {
    if (auth?.uid) {
      if (location?.state?.recalledPath) {
        return <NativeDomNavigate to={location?.state?.recalledPath} />;
      } else {
        return <NativeDomNavigate to={"/" + routeRegistry?.dashboard} />;
      }
    } else if (
      location?.state?.sessionExpired &&
      (location.pathname !== "/" + routeRegistry?.enterpassword ||
        location.pathname !== "/")
    ) {
      return <NativeDomNavigate to={"/" + routeRegistry?.enterpassword} />;
    } else if (
      location.pathname !== "/" + routeRegistry?.checkuserexist ||
      location.pathname !== "/"
    ) {
      return <NativeDomNavigate to={"/" + routeRegistry?.checkuserexist} />;
    }
  }

  return (
    <CoreGrid
      styleClasses={[
        CoreClasses.HEIGHT.VH_100,
        CoreClasses.WIDTH.VW_100,
        CoreClasses.WIDTH.W_100,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}>
      <CoreBox
        gridProps={{ gridSize: 6 }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreBox styleClasses={[CoreClasses?.MARGIN?.MB1]}>
          <CoreComponent componentName={"AppLogoGif"} />
        </CoreBox>

        <CoreTypographyBody1
          styleClasses={!auth?.uid ? [CoreClasses?.COLOR?.TEXT_WHITE] : []}>
          {checkAppLoadDependencies()?.message}
        </CoreTypographyBody1>
      </CoreBox>
    </CoreGrid>
  );
}
