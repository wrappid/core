import React from "react";
import CoreAppDiv from "./components/layouts/CoreAppDiv";
import AppContainer from "./layout/AppContainer";
import CoreNavigation from "./components/navigation/CoreNavigation";
import CoreProvider from "./store/CoreProvider";
import CoreRoutes from "./CoreRoutes";
import {
  ComponentRegistryContext,
  CoreDialogContext
} from "./config/contextHandler";
import CoreComponentRegistry from "./config/ComponentRegistry";

export default function CoreApp({
  reducers,
  storage,
  componentRegistry,
  appStyles,
  customIcons,
}) {

  const [dialog, setDialog] = useState({});
  const value = { dialog, setDialog };
  return (
    <CoreProvider
      appReducer={reducers}
      storage={storage}
      appStyles={appStyles}
      customIcons={customIcons}
    >
      <ComponentRegistryContext.Provider
        value={{ ...componentRegistry, ...CoreComponentRegistry }}
      >
        <React.StrictMode>
          <CoreAppDiv>
          <CoreDialogContext.Provider value={value}>
            <CoreNavigation>
              <AppContainer>
                <CoreRoutes />
              </AppContainer>
            </CoreNavigation>
            </CoreDialogContext.Provider>
          </CoreAppDiv>
        </React.StrictMode>
      </ComponentRegistryContext.Provider>
    </CoreProvider>
  );
}
