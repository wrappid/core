// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

import {
  NativeDomNavigate,
  nativeUseLocation
  // eslint-disable-next-line import/no-unresolved
} from "@wrappid/native";
import { useSelector } from "react-redux";

import { ComponentRegistryContext, CoreRouteRegistryContext } from "../../config/contextHandler";
import CoreLayoutItem from "../../layout/CoreLayoutItem";
import CoreClasses from "../../styles/CoreClasses";
import CoreComponent from "../CoreComponent";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreCircularProgress from "../feedback/CoreCircularProgress";
import CenteredBlankLayout from "../layouts/_system/CenteredBlankLayout";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";

export default function SplashComponent() {
  const registeredRoutes = useContext(CoreRouteRegistryContext);
  const componentRegistry = React.useContext(ComponentRegistryContext);

  const auth = useSelector((state) => state?.auth || {});
  let location = nativeUseLocation();

  const checkIfAuthRouteExist = () => {
    let authRoutes = registeredRoutes.filter((route) => route.authRequired);

    if (authRoutes?.length < 1) {
      return false;
    }

    return true;
  };

  const checkAppLoadDependencies = () => {
    if (
      registeredRoutes &&
      registeredRoutes.length > 0
    ) {
      if (auth?.uid) {
        if (checkIfAuthRouteExist()) {
          return { message: "Navigating...", success: true };
        } else {
          return { message: "Loading authenticated routes...", success: false };
        }
      } else {
        return { message: "Navigating...", success: true };
      }
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
    if (auth?.uid && location?.state?.recalledPath) {
      return <NativeDomNavigate to={location?.state?.recalledPath} />;
    } else {
      return <NativeDomNavigate to="/" />;
    }
  }

  return (
    <>
      <CoreLayoutItem id={CenteredBlankLayout.PLACEHOLDER.CONTENT}>
        <CoreGrid
          styleClasses={[
            CoreClasses.HEIGHT.VH_100,
            CoreClasses.WIDTH.VW_100,
            CoreClasses.WIDTH.W_100,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          ]}
        >
          <CoreBox
            gridProps={{ gridSize: 6 }}
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            <CoreBox styleClasses={[CoreClasses?.MARGIN?.MB1]}>
              {Object.keys(componentRegistry).includes("AppLogoGif") ? <CoreComponent componentName={"AppLogoGif"} /> : <CoreCircularProgress />}
            </CoreBox>

            <CoreTypographyBody1 styleClasses={!auth?.uid ? [CoreClasses?.COLOR?.TEXT_WHITE] : []}>
              {checkAppLoadDependencies()?.message}
            </CoreTypographyBody1>
          </CoreBox>
        </CoreGrid>
      </CoreLayoutItem>
    </>
  );
}
