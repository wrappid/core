import { createTheme } from "@mui/material";
import { theme as coreTheme } from "../theme/theme";

const WEB_PLATFORM = "web";
const APP_PLATFORM = "web";

function createWebTheme(customThemme) {
  console.log("Getting web theme");
  return createTheme({ ...coreTheme, ...customThemme });
}

function createNativeTheme(customThemme) {
  console.log("Getting app theme");
  return { ...coreTheme, ...customThemme };
}

export function detectPlatform(document, navigator) {
  console.log("platform detection", document, navigator);
  if (typeof document !== "undefined") {
    // I'm on the web!
    return WEB_PLATFORM;
  } else if (
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
    // I'm in react-native
    return APP_PLATFORM;
  } else {
    // I'm in node js
    return null;
  }
}

export function getCoreTheme(customThemme) {
  let d = null;
  let n = null;
  try {
    d = document;
  } catch (err) {
    console.log("Document not find");
  }
  try {
    n = navigator;
  } catch (err) {
    console.log("navigator not find");
  }
  let runTime = detectPlatform(d, n);
  if (runTime === WEB_PLATFORM) {
    return createWebTheme(customThemme);
  } else if (runTime === APP_PLATFORM) {
    return createNativeTheme(customThemme);
  } else {
    throw "Undefined platform";
  }
}

let theme = null;

try {
  let p = "../../../../src/config.json";
  let config = require(p);
  if (config?.theme) {
    theme = getCoreTheme(config?.theme);
  } else {
    console.warn("No custom theme provided in config.json");
    theme = getCoreTheme({});
  }
} catch (err) {
  console.warn("No custom config provided");
  theme = getCoreTheme({});
}

console.log("THEME", theme);

export default theme;
