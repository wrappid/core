// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useSelector } from "react-redux";

import CoreComponent from "./CoreComponent";
import CoreTypographyBody1 from "./dataDisplay/CoreTypographyBody1";
import CoreCircularProgress from "./feedback/CoreCircularProgress";
import CenteredBlankLayout from "./layouts/_system/CenteredBlankLayout";
import { ComponentRegistryContext, CoreRoutesContext } from "../config/contextHandler";
import { CoreDomNavigate } from "../helper/routerHelper";
import CoreLayoutItem from "../layout/CoreLayoutItem";

export default function PageLoader() {
  /**
   * @todo
   * navigate to default route
   * 
   */
  const componentRegistry = React.useContext(ComponentRegistryContext);
  const { config } = React.useContext(WrappidDataContext);
  const [defaultRoute, setDefaultRoute] = React.useState(null);
  const contextRoutes = React.useContext(CoreRoutesContext);
  const { uid, accessToken } = useSelector((state) => state?.auth);
  let authenticated = uid && accessToken ? true : false;

  React.useEffect(() => {
    let defaultRouteName = (authenticated ? config?.defaultAuthenticatedRoute : config?.defaultRoute) || config?.defaultRoute;

    if (defaultRouteName && Object.prototype.hasOwnProperty.call((contextRoutes || {}), defaultRouteName)) {
      setDefaultRoute(contextRoutes[defaultRouteName]);
    }
  }, [config, contextRoutes]);

  return (
    <>
      <CoreLayoutItem id={CenteredBlankLayout.PLACEHOLDER.CONTENT}>
        {defaultRoute && defaultRoute?.url ? (
          <CoreDomNavigate to={`/${defaultRoute?.url}`} />
        ) : (
          <>
            {Object.keys(componentRegistry).includes("AppLogoGif") ? <CoreComponent componentName={"AppLogoGif"} /> : <CoreCircularProgress />}

            <CoreTypographyBody1 gutterBottom={false}>Loading ...</CoreTypographyBody1>
          </>
        )}
      </CoreLayoutItem>
    </>
  );
}
