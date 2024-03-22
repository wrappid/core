// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import {
  AppStylesContext,
  ComponentRegistryContext,
  CoreApplicationContext,
  CoreMenuContext,
  CoreResourceContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "../config/contextHandler";
import ComponentsRegistry from "../registry/ComponentsRegistry";
import FunctionsRegistry from "../registry/FunctionsRegistry";
import CoreRoutesProvider from "../route/CoreRoutesProvider";

export default function CoreContextProvider(props) {

  const {
    appStyles,
    applicationRegistry,
    routesRegistry,
    menusRegistry,
    componentsRegistry,
    resourcesRegistry,
    validationsRegistry,
    functionsRegistry,
    children,
  } = props;

  return (
    <CoreApplicationContext.Provider value={applicationRegistry}>
      <CoreRoutesProvider routes={routesRegistry}>
        <ValidationsRegistryContext.Provider value={validationsRegistry}>
          <FunctionsRegistryContext.Provider
            value={{ ...FunctionsRegistry, ...functionsRegistry }}
          >
            <ComponentRegistryContext.Provider
              value={{ ...ComponentsRegistry, ...componentsRegistry }}
            >
              <CoreResourceContext.Provider value={resourcesRegistry}>
                <CoreMenuContext.Provider value={menusRegistry}>
                  <AppStylesContext.Provider value={appStyles}>
                    {children}
                  </AppStylesContext.Provider>
                </CoreMenuContext.Provider>
              </CoreResourceContext.Provider>
            </ComponentRegistryContext.Provider>
          </FunctionsRegistryContext.Provider>
        </ValidationsRegistryContext.Provider>
      </CoreRoutesProvider>
    </CoreApplicationContext.Provider>
  );
}
