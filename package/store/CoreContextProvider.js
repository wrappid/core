// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { theme } from "@wrappid/styles";

import ComponentRegistry from "../config/ComponentRegistry";
import {
  AppStylesContext,
  ComponentRegistryContext,
  CoreApplicationContext,
  CoreMenuContext,
  CoreResourceContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "../config/contextHandler";
import FunctionsRegistry from "../registry/FunctionsRegistry";

export default function CoreContextProvider(props) {
  // eslint-disable-next-line no-console
  console.log("******************************************");
  // eslint-disable-next-line no-console
  console.log("THEME: ", theme);
  // eslint-disable-next-line no-console
  console.log("******************************************");

  return (
    <CoreApplicationContext.Provider value={props.applicationRegistry}>
      <ValidationsRegistryContext.Provider value={props.validationsRegistry}>
        <FunctionsRegistryContext.Provider
          value={{ ...FunctionsRegistry, ...props.functionsRegistry }}
        >
          <ComponentRegistryContext.Provider
            value={{ ...ComponentRegistry, ...props.componentRegistry }}
          >
            <CoreResourceContext.Provider value={props.resourceRegistry}>
              <CoreMenuContext.Provider value={props.menuRegistry}>
                <AppStylesContext.Provider value={props.appStyles}>
                  {props.children}
                </AppStylesContext.Provider>
              </CoreMenuContext.Provider>
            </CoreResourceContext.Provider>
          </ComponentRegistryContext.Provider>
        </FunctionsRegistryContext.Provider>
      </ValidationsRegistryContext.Provider>
    </CoreApplicationContext.Provider>
  );
}
