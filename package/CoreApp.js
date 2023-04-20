import React from "react";
import CoreAppDiv from "./components/layouts/CoreAppDiv";
import AppContainer from "./layout/AppContainer";
import CoreNavigation from "./components/navigation/CoreNavigation";
import CoreRoutes from "./CoreRoutes";

export default function CoreApp() {
  return (
    <React.StrictMode>
      <CoreAppDiv>
        <CoreNavigation>
          <AppContainer>
            <CoreRoutes />
          </AppContainer>
        </CoreNavigation>
      </CoreAppDiv>
    </React.StrictMode>
  );
}
