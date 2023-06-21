import React, { createContext } from "react";
import { coreDialogInitValue } from "./constants";

export const ComponentRegistryContext = createContext({});
export const ThemeContext = createContext({});
export const AppStylesContext = createContext({});
export const IconContext = createContext({});
export const CoreDialogContext = createContext({
  dialog: {},
  setDialog: () => {},
});
export const CoreMenuContext = createContext({});
export const CoreResourceContext = createContext({});