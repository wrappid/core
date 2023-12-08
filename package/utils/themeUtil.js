// eslint-disable-next-line import/no-unresolved
import { NativeCssBaseline as CoreCssBaseline } from "@wrappid/native";

export const WEB_PLATFORM = "web";
export const APP_PLATFORM = "mobile";

function detectPlatform() {
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
  // -- console.log("***************\nplatform detection\n******************", doc, nav);
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

export { detectPlatform, CoreCssBaseline };
