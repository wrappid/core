import { createContext } from "react";

export const CoreApplicationContext = createContext({ version: "" });
export const CoreThemeContext = createContext({});
export const CoreAPIContext = createContext({});
export const CoreRoutesContext = createContext([]);
export const ComponentRegistryContext = createContext({});
export const FunctionsRegistryContext = createContext({});
export const AppStylesContext = createContext({});
export const IconContext = createContext({});
export const CoreDialogContext = createContext({
  dialog   : {},
  setDialog: () => {},
});
export const CoreMenuContext = createContext({});
export const CoreResourceContext = createContext({});
export const ValidationsRegistryContext = createContext({});
export const CoreRouteRegistryContext = createContext({});