
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreAppDiv from "./components/layouts/CoreAppDiv";
import CoreNavigation from "./components/navigation/CoreNavigation";
import CoreRoutes from "./CoreRoutes";
import AppContainer from "./layout/AppContainer";
import CoreProvider from "./store/CoreProvider";

export default function CoreApp({
  reducers,
  storage,
  componentRegistry,
  appStyles,
  customIcons,
  menuRegistry,
  applicationRegistry,
  resourceRegistry,
  routesRegistry,
  functionsRegistry,
  validationsRegistry,
}) {
  return (
    <CoreProvider
      appReducer={reducers}
      storage={storage}
      appStyles={appStyles}
      customIcons={customIcons}
      applicationRegistry={applicationRegistry}
      componentRegistry={componentRegistry}
      functionsRegistry={functionsRegistry}
      menuRegistry={menuRegistry}
      resourceRegistry={resourceRegistry}
      validationsRegistry={validationsRegistry} 
    >
      <CoreAppDiv>
        <CoreNavigation>
          <AppContainer>
            <CoreRoutes routes={routesRegistry} />
          </AppContainer>
        </CoreNavigation>
      </CoreAppDiv>
    </CoreProvider>
  );
}
