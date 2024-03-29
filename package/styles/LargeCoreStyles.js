// eslint-disable-next-line import/no-unresolved
import { BaseStyle, IMPORTANT, LargeUtilityStyles } from "@wrappid/styles";

// eslint-disable-next-line etc/no-commented-out-code
// import { LARGE_WINDOW_WIDTH, X_LARGE_WINDOW_WIDTH } from "../config/constants";
// const MIN_WIDTH = LARGE_WINDOW_WIDTH;
// const MAX_WIDTH = X_LARGE_WINDOW_WIDTH - 1;

export default class LargeCoreStyles extends BaseStyle {
  largeUtilityStyles = new LargeUtilityStyles().style;
  
  constructor() {
    super();

    this.style = {
      devBorder: { boxShadow: "inset 0px 0px 1px 1px green" },
      
      profileBarWidth: { maxWidth: "25vw" + IMPORTANT },
    };
  }
}