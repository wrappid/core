import { nativeCreateTheme } from "@wrappid/styled-components";
import { theme as coreTheme } from "../theme/theme";

const WEB_PLATFORM = "web";
const APP_PLATFORM = "app";

export function detectPlatform() {
  let doc = null;
  let nav = null;

  try {
    doc = document;
  } catch (err) {
    doc = null;
  }
  try {
    nav = navigator;
  } catch (err) {
    nav = null;
  }
  console.log(
    "***************\nplatform detection\n******************",
    doc,
    nav
  );
  if (doc) {
    // I'm on the web!
    return WEB_PLATFORM;
  } else if (nav && nav?.product === "ReactNative") {
    // I'm in react-native
    return APP_PLATFORM;
  } else {
    // I'm in node js
    return null;
  }
}

let theme = null;

try {
  let p = "../../../../src/config.json";
  let config = require(p);
  if (config?.theme) {
    theme = nativeCreateTheme({ ...coreTheme, ...config?.theme });
  } else {
    console.warn("No custom theme provided in config.json");
    theme = nativeCreateTheme(coreTheme);
  }
} catch (err) {
  console.warn("No custom config provided");
  theme = nativeCreateTheme(coreTheme);
}

console.log("THEME", theme);

export default theme;
