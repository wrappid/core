// eslint-disable-next-line import/no-unresolved
import { BaseStyle, IMPORTANT, LargeUtilityStyles } from "@wrappid/styles";

// eslint-disable-next-line etc/no-commented-out-code
// import { LARGE_WINDOW_WIDTH, X_LARGE_WINDOW_WIDTH } from "../config/constants";
// const MIN_WIDTH = LARGE_WINDOW_WIDTH;
// const MAX_WIDTH = X_LARGE_WINDOW_WIDTH - 1;

export class LargeCoreStyles extends BaseStyle {
  largeUtilityStyles = new LargeUtilityStyles().style;
  
  constructor() {
    super();

    this.style = {
      authBanner: {
        backgroundImage   : "url(./images/welcome-bg.png)",
        backgroundPosition: "center" + IMPORTANT,
        backgroundRepeat  : "no-repeat" + IMPORTANT,
        backgroundSize    : "cover" + IMPORTANT,
        height            : "100%" + IMPORTANT,
      },
      authContainer    : { height: "100%" + IMPORTANT },
      authForm         : { height: "100%" + IMPORTANT },
      authFormContainer: { width: "60%" + IMPORTANT },
      devBorder        : { boxShadow: "inset 0px 0px 1px 1px green" },
      profileBarWidth  : { maxWidth: "25vw" + IMPORTANT },
    };
  }
}