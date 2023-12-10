// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import ComponentRegistry from "../config/ComponentRegistry";
import {
  AppStylesContext,
  ComponentRegistryContext,
  CoreApplicationContext,
  CoreMenuContext,
  CoreResourceContext,
  CoreRoutesContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "../config/contextHandler";
import FunctionsRegistry from "../registry/FunctionsRegistry";

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
      <CoreRoutesContext.Provider value={routesRegistry}>
        <ValidationsRegistryContext.Provider value={validationsRegistry}>
          <FunctionsRegistryContext.Provider
            value={{ ...FunctionsRegistry, ...functionsRegistry }}
          >
            <ComponentRegistryContext.Provider
              value={{ ...ComponentRegistry, ...componentsRegistry }}
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
      </CoreRoutesContext.Provider>
    </CoreApplicationContext.Provider>
  );
}
