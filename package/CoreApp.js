import React from "react";
import CoreAppDiv from "./components/layouts/CoreAppDiv";
import AppContainer from "./layout/AppContainer";
import CoreNavigation from "./CoreNavigation";
import { BrowserRouter } from "react-router-dom";

export default function CoreApp() {
  return (
    <React.StrictMode>
      <CoreAppDiv>
        <BrowserRouter>
          <AppContainer>
            <CoreNavigation />
          </AppContainer>
        </BrowserRouter>
      </CoreAppDiv>
    </React.StrictMode>
  );
}
