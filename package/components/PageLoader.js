// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useSelector } from "react-redux";

import { CoreRoutesContext } from "../config/contextHandler";
import { coreUseNavigate } from "../helper/routerHelper";
import CoreLayoutItem from "../layout/CoreLayoutItem";
// eslint-disable-next-line import/order
import CoreCircularProgress from "./feedback/CoreCircularProgress";
// eslint-disable-next-line import/order
import BlankLayout from "./layouts/_system/BlankLayout";
// eslint-disable-next-line import/order
import CoreTypographyBody1 from "./dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/no-unresolved

export default function PageLoader() {
/**
   * @todo
   * navigate to default route
   * 
   */
  const navigate = coreUseNavigate();
  const { config } = React.useContext(WrappidDataContext);
  const [defaultRoute, setDefaultRoute] = React.useState(null);
  const registeredRoutes = React.useContext(CoreRoutesContext);
  const { uid, accessToken } = useSelector((state) => state.auth);
  let authenticated = uid && accessToken ? true : false;

  React.useEffect(() => {
    let defaultRouteName = (authenticated ? config?.defaultAuthRoute : config?.defaultRoute) || config?.defaultRoute;

    if (defaultRouteName) {
      let defRouteArr = registeredRoutes?.filter((route) => route?.entityRef === defaultRouteName);

      if (defRouteArr?.length > 0) {
        setDefaultRoute(defRouteArr[0]);
      }
    }
  }, [config, registeredRoutes]);

  React.useEffect(() => {
    if (defaultRoute) {
      navigate(`/${defaultRoute?.url}`);
    }
  }, [defaultRoute]);
  /* --------------------------------------------------- */

  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreCircularProgress />

        <CoreTypographyBody1 gutterBottom={false}>Loading ...</CoreTypographyBody1>

        {/* eslint-disable-next-line etc/no-commented-out-code */}
        {/* <CoreGrid styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.BG.BG_GREY_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.PADDING.P2
        ]}>
          <CoreSection
            styleClasses={[CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
            gridProps={{ gridSize: { md: 4 } }}>
            <CoreCircularProgress />

            <CoreTypographyBody1 gutterBottom={false}>Loading ...</CoreTypographyBody1>
          </CoreSection>
        </CoreGrid> */}
      </CoreLayoutItem>
    </>
  );
}
