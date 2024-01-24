// eslint-disable-next-line import/no-unresolved
import { IMPORTANT } from "@wrappid/styles";

/* -- import {
  XX_LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH
} from "../config/constants"; */

// -- const MIN_WIDTH = X_LARGE_WINDOW_WIDTH;
// -- const MAX_WIDTH = XX_LARGE_WINDOW_WIDTH - 1;

export const xLargeCoreStyles = {
  authBanner: {
    backgroundImage   : "url(./images/welcome-bg.png)" + IMPORTANT,
    backgroundPosition: "center" + IMPORTANT,
    backgroundRepeat  : "no-repeat" + IMPORTANT,
    backgroundSize    : "cover" + IMPORTANT,
    height            : "100%" + IMPORTANT,
  },
  authContainer    : { height: "100%" + IMPORTANT },
  authForm         : { height: "100%" + IMPORTANT },
  authFormContainer: { width: "60%" + IMPORTANT },
  devBorder        : { boxShadow: "inset 0px 0px 1px 1px orange" },
};
