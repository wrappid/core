import { createContext } from "react";

export const ComponentRegistryContext = createContext({});
export const FunctionsRegistryContext = createContext({});
export const ThemeContext = createContext({});
export const AppStylesContext = createContext({});
export const IconContext = createContext({});
export const CoreDialogContext = createContext({
  dialog   : {},
  setDialog: () => {},
});
export const CoreMenuContext = createContext({});
export const CoreResourceContext = createContext({});
export const CoreApplicationContext = createContext({
  apisRegistry: {},
  routesRegistry: {},
  version    : ""
});
export const ValidationsRegistryContext = createContext({});