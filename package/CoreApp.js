import React from "react";
import CoreAppDiv from "./components/layouts/CoreAppDiv";
import AppContainer from "./layout/AppContainer";
import CoreNavigation from "./components/navigation/CoreNavigation";
import CoreRoutes from "./CoreRoutes";
import { ComponentRegistryContext } from "./config/contextHandler";

export default function CoreApp({reducers, componentRegistry}) {
  return (
    <CoreProvider appReducer={reducers}>
      <ComponentRegistryContext value={componentRegistry}>
        <React.StrictMode>
          <CoreAppDiv>
            <CoreNavigation>
              <AppContainer>
                <CoreRoutes />
              </AppContainer>
            </CoreNavigation>
          </CoreAppDiv>
        </React.StrictMode>
      </ComponentRegistryContext>
    </CoreProvider>
  );
}
